require('dotenv').config();
const { RDS_INIT } = require('../connections');
const { Client } = require('pg');
const chalk = require('chalk');

const client = new Client({ connectionString: RDS_INIT });

(async () => {
  try {
    await client.connect();

    // Drop all functions
    await Promise.all([
      client.query(
        `DROP FUNCTION IF EXISTS ${process.env.DATABASE_SCHEMA}.current_user;`
      ),

      client.query(
        `DROP FUNCTION IF EXISTS ${process.env.DATABASE_SCHEMA}.current_user_items;`
      ),

      client.query(
        `DROP FUNCTION IF EXISTS ${process.env.DATABASE_SCHEMA}.current_user_history;`
      ),

      client.query(
        `DROP FUNCTION IF EXISTS ${process.env.DATABASE_SCHEMA}.add_item;`
      ),

      client.query(
        `DROP FUNCTION IF EXISTS ${process.env.DATABASE_SCHEMA}.add_to_history;`
      )
    ]);

    // Create all custom SQL functions
    await Promise.all([
      // Retrieves the information of the current user
      client.query(`
        CREATE FUNCTION ${process.env.DATABASE_SCHEMA}.current_user
          ()
            RETURNS ${process.env.DATABASE_SCHEMA}.user AS $$

              SELECT *
              FROM ${process.env.DATABASE_SCHEMA}.user
              WHERE id = NULLIF(CURRENT_SETTING('jwt.claims.user_id', TRUE), '')::UUID

        $$ LANGUAGE SQL STABLE;
      `),

      // Retrieves the list items of the current user
      client.query(`
        CREATE FUNCTION ${process.env.DATABASE_SCHEMA}.current_user_items
          ()
            RETURNS SETOF ${process.env.DATABASE_SCHEMA}.item AS $$

              SELECT *
              FROM ${process.env.DATABASE_SCHEMA}.item
              WHERE
                owner_id = NULLIF(CURRENT_SETTING('jwt.claims.user_id', TRUE), '')::UUID
              ORDER BY id DESC;

        $$ LANGUAGE SQL STABLE;
      `),

      // Retrieves the history of the current user
      client.query(`
        CREATE FUNCTION ${process.env.DATABASE_SCHEMA}.current_user_history
          ()
            RETURNS SETOF ${process.env.DATABASE_SCHEMA}.history AS $$

              SELECT *
              FROM ${process.env.DATABASE_SCHEMA}.history
              WHERE
                owner_id = NULLIF(CURRENT_SETTING('jwt.claims.user_id', TRUE), '')::UUID
              ORDER BY created_at DESC;

        $$ LANGUAGE SQL STABLE;
      `),

      // Function to allow users to add items to their list
      client.query(`
        CREATE FUNCTION ${process.env.DATABASE_SCHEMA}.add_item
          ( product TEXT, quantity INT )
            RETURNS ${process.env.DATABASE_SCHEMA}.item AS $$

              DECLARE
                jwtUUID UUID := NULLIF(CURRENT_SETTING('jwt.claims.user_id', TRUE), '')::UUID;
                itemData ${process.env.DATABASE_SCHEMA}.item;
              BEGIN
                IF jwtUUID IS NOT NULL THEN
                  INSERT INTO ${process.env.DATABASE_SCHEMA}.item (product, quantity, owner_id)
                    VALUES ($1, $2, jwtUUID)
                    RETURNING * INTO itemData;

                  RETURN itemData;
                ELSE
                  RAISE EXCEPTION 'You cannot perform that operation.';
                END IF;
              END;

        $$ LANGUAGE PLPGSQL STRICT;
      `),

      // Function to checkout selected items
      client.query(`
        CREATE FUNCTION ${process.env.DATABASE_SCHEMA}.add_to_history
          ( products JSON[], createdAt TIMESTAMP WITH TIME ZONE )
            RETURNS ${process.env.DATABASE_SCHEMA}.history AS $$

              DECLARE
                jwtUUID UUID := NULLIF(CURRENT_SETTING('jwt.claims.user_id', TRUE), '')::UUID;
                historyData ${process.env.DATABASE_SCHEMA}.history;
              BEGIN
                IF jwtUUID IS NOT NULL THEN
                  INSERT INTO ${process.env.DATABASE_SCHEMA}.history (history, created_at, owner_id)
                    VALUES ($1, $2, jwtUUID)
                    RETURNING * INTO historyData;

                  RETURN historyData;
                ELSE
                  RAISE EXCEPTION 'You cannot perform that operation.';
                END IF;
              END;

        $$ LANGUAGE PLPGSQL STRICT;
      `)
    ]);

    // Function comments and grants
    await Promise.all([
      // current_user
      client.query(`
        COMMENT ON FUNCTION ${process.env.DATABASE_SCHEMA}.current_user() IS
          'Retrieves the person who was identified by our JWT.';
      `),

      client.query(
        `GRANT EXECUTE ON FUNCTION ${process.env.DATABASE_SCHEMA}.current_user() TO
          ${process.env.DATABASE_SCHEMA}_anonymous,
          ${process.env.DATABASE_SCHEMA}_user;`
      ),

      // current_user_items
      client.query(
        `COMMENT ON FUNCTION ${process.env.DATABASE_SCHEMA}.current_user_items() IS
          'Retrieves all the items in the list of the current user.';`
      ),

      client.query(
        `GRANT EXECUTE ON FUNCTION ${process.env.DATABASE_SCHEMA}.current_user_items() TO
          ${process.env.DATABASE_SCHEMA}_user;`
      ),

      // current_user_history
      client.query(
        `COMMENT ON FUNCTION ${process.env.DATABASE_SCHEMA}.current_user_history() IS
          'Retrieves the history of the current user.';`
      ),

      client.query(
        `GRANT EXECUTE ON FUNCTION ${process.env.DATABASE_SCHEMA}.current_user_history() TO
          ${process.env.DATABASE_SCHEMA}_user;`
      ),

      // add_item
      client.query(`
        COMMENT ON FUNCTION ${process.env.DATABASE_SCHEMA}.add_item(text, int) IS
          'Replaced default create item.';
      `),

      client.query(
        `GRANT EXECUTE ON FUNCTION ${process.env.DATABASE_SCHEMA}.add_item(text, int) TO
          ${process.env.DATABASE_SCHEMA}_user;`
      ),

      // add_to_history
      client.query(`
        COMMENT ON FUNCTION ${process.env.DATABASE_SCHEMA}.add_to_history
          (products JSON[], createdAt TIMESTAMP WITH TIME ZONE) IS
            'Add items that have been checked out into the history.';
      `),

      client.query(
        `GRANT EXECUTE ON FUNCTION ${process.env.DATABASE_SCHEMA}.add_to_history
          (products JSON[], createdAt TIMESTAMP WITH TIME ZONE) TO
            ${process.env.DATABASE_SCHEMA}_user;`
      )
    ]);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: FUNCTIONS Script!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: FUNCTIONS Script!'));
    console.error(error);
  }
})();
