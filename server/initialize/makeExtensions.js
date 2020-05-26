const { Client } = require('pg');
const chalk = require('chalk');

const { RDS_INIT } = require('../connections');

const client = new Client({ connectionString: RDS_INIT });

/**
 * Only run these scripts once
 * This is to setup the template1 database
 *   with the "pgcrypto" extension that's going to be used for password hashing
 */
(async () => {
  try {
    await client.connect();

    await client.query(`CREATE SCHEMA extensions;`);

    await client.query(`GRANT USAGE ON SCHEMA extensions TO public;`);

    await client.query(
      `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA extensions TO public;`
    );

    await client.query(
      `ALTER DEFAULT PRIVILEGES IN SCHEMA extensions GRANT EXECUTE ON FUNCTIONS TO public;`
    );

    await client.query(
      `ALTER DEFAULT PRIVILEGES IN SCHEMA extensions GRANT USAGE ON TYPES TO public;`
    );

    await client.query(`CREATE EXTENSION pgcrypto SCHEMA extensions;`);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: INIT-EXTENIONS SCRIPT!'));

    console.log(chalk.black.bgRed('===================================='));
    console.log(chalk.black.bgRed('ONLY RUN THE INIT SCRIPT ONCE'));
    console.log(chalk.black.bgRed('===================================='));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: INIT-EXTENIONS SCRIPT!'));
    console.error(error);
  }
})();
