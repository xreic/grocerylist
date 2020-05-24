require('dotenv').config();
const { AWS_INIT } = require('../connections');
const { Client } = require('pg');
const chalk = require('chalk');

const client = new Client({ connectionString: AWS_INIT });

/**
 * Script to add the roles that are available to be used
 * Anonymous - Role meant for users to be able to register
 * User - Role meant for users to be able to interact with the app
 * Postgraphile - Role for backend to connect to PostGraphile
 */
(async () => {
  try {
    await client.connect();

    // Drop then create the roles required for usage
    await Promise.all([
      client.query(
        `DROP ROLE IF EXISTS ${process.env.DATABASE_SCHEMA}_postgraphile;`
      ),

      client.query(
        `DROP ROLE IF EXISTS ${process.env.DATABASE_SCHEMA}_anonymous;`
      ),

      client.query(`DROP ROLE IF EXISTS ${process.env.DATABASE_SCHEMA}_user;`)
    ]);

    await Promise.all([
      client.query(
        `CREATE ROLE ${process.env.DATABASE_SCHEMA}_postgraphile LOGIN PASSWORD '${process.env.POSTGRAPHILE_PASSWORD}';`
      ),

      client.query(`CREATE ROLE ${process.env.DATABASE_SCHEMA}_anonymous;`),

      client.query(`CREATE ROLE ${process.env.DATABASE_SCHEMA}_user;`)
    ]);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: ROLES Script!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: ROLES Script!'));
    console.error(error);
  }
})();
