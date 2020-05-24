require('dotenv').config();
const { AWS_ROOT } = require('../connections');
const { Client } = require('pg');
const chalk = require('chalk');

const client = new Client({ connectionString: AWS_ROOT });
console.log(AWS_ROOT);
/**
 * Only run these scripts once
 * This is to setup the template1 database
 *   with the "pgcrypto" extension that's going to be used for password hashing
 */
(async () => {
  try {
    await client.connect();

    console.log(chalk.black.bgRed('===================================='));
    console.log(chalk.black.bgRed('ONLY RUN THIS SCRIPT ONCE'));
    console.log(chalk.black.bgRed('===================================='));

    await client.query(
      `CREATE ROLE ${process.env.DATABASE_SCHEMA}_INITIATOR
        LOGIN CREATEDB CREATEROLE
          PASSWORD '${process.env.DATABASE_INIT_PASSWORD}'`
    );

    await client.query(
      `GRANT rds_superuser TO ${process.env.DATABASE_SCHEMA}_INITIATOR;`
    );

    await client.query(
      `ALTER ROLE ${process.env.DATABASE_SCHEMA}_INITIATOR
        SET search_path
          TO ${process.env.DATABASE_SCHEMA}, extensions;`
    );

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: INIT-ROLE SCRIPT!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: INIT-ROLE SCRIPT!'));
    console.error(error);
  }
})();
