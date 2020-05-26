const { Client } = require('pg');
const chalk = require('chalk');

const { RDS_INIT } = require('../connections');
const { DATABASE_SCHEMA } = require('../../env');

const client = new Client({ connectionString: RDS_INIT });

/**
 * Script to create PostGraphile functions that perform
 *   authentications and authorization.
 */
(async () => {
  try {
    await client.connect();

    // Drop all functions
    await Promise.all([
      client.query(`DROP FUNCTION IF EXISTS ${DATABASE_SCHEMA}.register_user;`),

      client.query(`DROP FUNCTION IF EXISTS ${DATABASE_SCHEMA}.authenticate;`)
    ]);

    // Create all auth related functions
    await Promise.all([
      /**
       * Registration function
       * Meant for users with the anonymous role
       */
      client.query(`
        CREATE FUNCTION ${DATABASE_SCHEMA}.register_user
          ( displayname TEXT, email TEXT, password TEXT, confirmpassword TEXT )
            RETURNS ${DATABASE_SCHEMA}.user AS $$

              DECLARE
                userVar ${DATABASE_SCHEMA}.user;
              BEGIN
                IF password = confirmpassword THEN
                  INSERT INTO ${DATABASE_SCHEMA}.user (displayname) VALUES ($1)
                    RETURNING * INTO userVar;

                  INSERT INTO ${DATABASE_SCHEMA}_private.user_account (user_id, email, password_hash) VALUES
                    (userVar.id, $2, crypt(password, gen_salt('bf', 8)));

                  RETURN userVar;
                ELSE
                  RAISE EXCEPTION 'Non-matching passwords';
                END IF;
              END;

        $$ LANGUAGE PLPGSQL STRICT SECURITY DEFINER;
      `),

      // Authentication (Sign in) function
      client.query(`
        CREATE FUNCTION ${DATABASE_SCHEMA}.authenticate
          ( email TEXT, password TEXT )
            RETURNS ${DATABASE_SCHEMA}.jwt_token AS $$

              DECLARE
                account ${DATABASE_SCHEMA}_private.user_account;
              BEGIN
                SELECT data.* INTO account
                FROM ${DATABASE_SCHEMA}_private.user_account AS data
                WHERE data.email = $1;

                IF account.password_hash = crypt(password, account.password_hash) THEN
                  RETURN ('${DATABASE_SCHEMA}_user',
                  account.user_id,
                  EXTRACT(EPOCH FROM (NOW() + INTERVAL '1 YEAR')))::${DATABASE_SCHEMA}.jwt_token;
                ELSE
                  RAISE EXCEPTION 'Invalid credentials';
                END IF;
              END;

        $$ LANGUAGE PLPGSQL STRICT SECURITY DEFINER;
      `)
    ]);

    // Add function comments
    await Promise.all([
      client.query(`
        COMMENT ON FUNCTION ${DATABASE_SCHEMA}.register_user(text, text, text, text) IS
          'Registers a single user and creates an account in our app.';
      `),

      client.query(`
        COMMENT ON FUNCTION ${DATABASE_SCHEMA}.authenticate(text, text) IS
          'Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 1 year.';
      `)
    ]);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: AUTH SCRIPT!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: AUTH SCRIPT!'));
    console.error(error);
  }
})();
