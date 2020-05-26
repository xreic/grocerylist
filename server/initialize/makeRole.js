const { Client } = require('pg');
const chalk = require('chalk');

const { RDS_ROOT } = require('../connections');
const {
  DATABASE_SCHEMA,
  DATABASE_INIT_PASSWORD,
  RDS_ENDPOINT
} = require('../../env');

const client = new Client({ connectionString: RDS_ROOT });

/**
 * Only run these scripts once
 * This is to setup the template1 database
 *   with the "pgcrypto" extension that's going to be used for password hashing
 */
(async () => {
  try {
    await client.connect();

    console.log(chalk.black.bgRed('===================================='));
    console.log(chalk.black.bgRed('ONLY RUN THE INIT SCRIPT ONCE'));
    console.log(chalk.black.bgRed('===================================='));

    // await client.query(
    //   `CREATE ROLE ${DATABASE_SCHEMA}_INITIATOR
    //     LOGIN CREATEDB CREATEROLE
    //       PASSWORD '${DATABASE_INIT_PASSWORD}'`
    // );

    if (RDS_ENDPOINT !== 'localhost') {
      await client.query(
        `CREATE ROLE ${DATABASE_SCHEMA}_INITIATOR
          LOGIN CREATEDB CREATEROLE
            PASSWORD '${DATABASE_INIT_PASSWORD}'`
      );

      await client.query(
        `GRANT rds_superuser TO ${DATABASE_SCHEMA}_INITIATOR;`
      );
    } else {
      await client.query(
        `CREATE ROLE ${DATABASE_SCHEMA}_INITIATOR
          LOGIN SUPERUSER
            PASSWORD '${DATABASE_INIT_PASSWORD}'`
      );
    }

    await client.query(
      `ALTER ROLE ${DATABASE_SCHEMA}_INITIATOR
        SET search_path
          TO ${DATABASE_SCHEMA}, extensions;`
    );

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: INIT-ROLE SCRIPT!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: INIT-ROLE SCRIPT!'));
    console.error(error);
  }
})();
