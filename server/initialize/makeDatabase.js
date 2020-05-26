require('dotenv').config();
const { RDS_INIT_POSTGRES } = require('../connections');
const { Client } = require('pg');
const chalk = require('chalk');

const client = new Client({ connectionString: RDS_INIT_POSTGRES });

/**
 * Only run these scripts once
 * This is to setup the template1 database
 *   with the "pgcrypto" extension that's going to be used for password hashing
 */
(async () => {
  try {
    await client.connect();

    await client.query(`CREATE DATABASE ${process.env.DATABASE_NAME};`);

    await client.query(
      `ALTER DATABASE ${process.env.DATABASE_NAME}
        SET search_path
          TO ${process.env.DATABASE_SCHEMA}, extensions;`
    );

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: INIT-DATABASE SCRIPT!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: INIT-DATABASE SCRIPT!'));
    console.error(error);
  }
})();
