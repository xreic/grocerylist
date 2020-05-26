const { Client } = require('pg');
const chalk = require('chalk');

const { RDS_INIT } = require('../connections');
const { DATABASE_SCHEMA } = require('../../env');

const client = new Client({ connectionString: RDS_INIT });

/**
 * Set the whitelisted actions for each role
 * Sets row level security
 */
(async () => {
  try {
    await client.connect();

    // Grants to the main schmea
    await client.query(
      `GRANT USAGE ON SCHEMA ${DATABASE_SCHEMA} TO
          ${DATABASE_SCHEMA}_anonymous,
          ${DATABASE_SCHEMA}_user;`
    );

    // Grants to the "USER" table
    await Promise.all([
      client.query(
        `GRANT SELECT ON TABLE ${DATABASE_SCHEMA}.user TO
          ${DATABASE_SCHEMA}_anonymous,
          ${DATABASE_SCHEMA}_user;`
      ),

      client.query(
        `GRANT UPDATE, DELETE ON TABLE ${DATABASE_SCHEMA}.user TO
          ${DATABASE_SCHEMA}_user;`
      )
    ]);

    // Grants to the "ITEM" table
    await Promise.all([
      client.query(
        `GRANT SELECT ON TABLE ${DATABASE_SCHEMA}.item TO
          ${DATABASE_SCHEMA}_anonymous,
          ${DATABASE_SCHEMA}_user;`
      ),

      client.query(
        `GRANT INSERT, UPDATE, DELETE ON TABLE ${DATABASE_SCHEMA}.item TO
          ${DATABASE_SCHEMA}_user;`
      ),

      client.query(
        `GRANT USAGE ON SEQUENCE ${DATABASE_SCHEMA}.item_id_seq TO
          ${DATABASE_SCHEMA}_user;`
      )
    ]);

    // Grants to the "HISTORY" table
    await Promise.all([
      client.query(
        `GRANT SELECT ON TABLE ${DATABASE_SCHEMA}.history TO
            ${DATABASE_SCHEMA}_anonymous,
            ${DATABASE_SCHEMA}_user;`
      ),

      client.query(
        `GRANT INSERT, UPDATE, DELETE ON TABLE ${DATABASE_SCHEMA}.history TO
            ${DATABASE_SCHEMA}_user;`
      ),

      client.query(
        `GRANT USAGE ON SEQUENCE ${DATABASE_SCHEMA}.history_id_seq TO
            ${DATABASE_SCHEMA}_user;`
      )
    ]);

    // Auth function grants
    await Promise.all([
      client.query(
        `GRANT EXECUTE ON FUNCTION ${DATABASE_SCHEMA}.register_user(text, text, text, text) TO
          ${DATABASE_SCHEMA}_anonymous;`
      ),

      client.query(
        `GRANT EXECUTE ON FUNCTION ${DATABASE_SCHEMA}.authenticate(text, text) TO
          ${DATABASE_SCHEMA}_anonymous,
          ${DATABASE_SCHEMA}_user;`
      )
    ]);

    // Enables row level security
    await Promise.all([
      client.query(
        `ALTER TABLE ${DATABASE_SCHEMA}.user ENABLE ROW LEVEL SECURITY;`
      ),

      client.query(
        `ALTER TABLE ${DATABASE_SCHEMA}.item ENABLE ROW LEVEL SECURITY;`
      ),

      client.query(
        `ALTER TABLE ${DATABASE_SCHEMA}.history ENABLE ROW LEVEL SECURITY;`
      )
    ]);

    // Set allowed actions per table per role
    await Promise.all([
      // Allowed actions for "USER" table
      client.query(
        `CREATE POLICY select_user on ${DATABASE_SCHEMA}.user FOR SELECT USING (true);`
      ),

      client.query(
        `CREATE POLICY update_user ON ${DATABASE_SCHEMA}.user FOR UPDATE TO
          ${DATABASE_SCHEMA}_user
          USING (id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      client.query(
        `CREATE POLICY delete_user ON ${DATABASE_SCHEMA}.user FOR DELETE TO
          ${DATABASE_SCHEMA}_user
          USING (id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      // Allowed actions for "ITEM" table
      client.query(
        `CREATE POLICY select_item on ${DATABASE_SCHEMA}.item FOR SELECT USING (true);`
      ),

      client.query(
        `CREATE POLICY insert_item ON ${DATABASE_SCHEMA}.item FOR INSERT TO
          ${DATABASE_SCHEMA}_user WITH CHECK
          (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      client.query(
        `CREATE POLICY update_item ON ${DATABASE_SCHEMA}.item FOR UPDATE TO
          ${DATABASE_SCHEMA}_user USING
          (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      client.query(
        `CREATE POLICY delete_item ON ${DATABASE_SCHEMA}.item FOR DELETE TO
          ${DATABASE_SCHEMA}_user USING
          (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      // Allowed actions for "HISTORY" table
      client.query(
        `CREATE POLICY select_history on ${DATABASE_SCHEMA}.history FOR SELECT USING (true);`
      ),

      client.query(
        `CREATE POLICY insert_history ON ${DATABASE_SCHEMA}.history FOR INSERT TO
          ${DATABASE_SCHEMA}_user WITH CHECK
          (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      client.query(
        `CREATE POLICY update_history ON ${DATABASE_SCHEMA}.history FOR UPDATE TO
          ${DATABASE_SCHEMA}_user USING
          (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      ),

      client.query(
        `CREATE POLICY delete_history ON ${DATABASE_SCHEMA}.history FOR DELETE TO
          ${DATABASE_SCHEMA}_user USING
          (owner_id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid);`
      )
    ]);

    // Grants "POSTGRAPHILE" role, the same permissions anonymous and normal user roles have
    await Promise.all([
      client.query(`
        GRANT ${DATABASE_SCHEMA}_anonymous TO ${DATABASE_SCHEMA}_postgraphile;
      `),

      client.query(`
        GRANT ${DATABASE_SCHEMA}_user TO ${DATABASE_SCHEMA}_postgraphile;
      `)
    ]);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: PERMS SCRIPT!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: PERMISSIONS SCRIPT!'));
    console.error(error);
  }
})();
