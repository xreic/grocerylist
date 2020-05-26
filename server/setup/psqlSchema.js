const { Client } = require('pg');
const chalk = require('chalk');

const { RDS_INIT } = require('../connections');
const { DATABASE_SCHEMA } = require('../../env');

const client = new Client({ connectionString: RDS_INIT });

(async () => {
  try {
    await client.connect();

    // Drop all schemas and tables
    // prettier-ignore
    await Promise.all([
      client.query(
        `DROP SCHEMA IF EXISTS ${DATABASE_SCHEMA} CASCADE;`
      ),

      client.query(
        `DROP SCHEMA IF EXISTS ${DATABASE_SCHEMA}_private CASCADE;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${DATABASE_SCHEMA}.user;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${DATABASE_SCHEMA}_private.user_account;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${DATABASE_SCHEMA}.item;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${DATABASE_SCHEMA}.history;`
      )
    ]);

    /**
     * Create all schemas
     * Separate from tables to make sure this goes first
     */
    await Promise.all([
      client.query(`CREATE SCHEMA ${DATABASE_SCHEMA};`),

      client.query(`CREATE SCHEMA ${DATABASE_SCHEMA}_private;`)
    ]);

    // Create all tables and JWT composite type
    await Promise.all([
      // User(s) table setup
      client.query(`
        CREATE TABLE ${DATABASE_SCHEMA}.user (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          displayname TEXT NOT NULL CHECK (char_length(displayname) < 80),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
        );
      `),

      /**
       * User(s) private table setup
       * Store important information
       * Anonymous and normal users cannot interact with this schema
       */
      client.query(`
        CREATE TABLE ${DATABASE_SCHEMA}_private.user_account (
          user_id UUID PRIMARY KEY REFERENCES ${DATABASE_SCHEMA}.user(id) ON DELETE CASCADE,
          email TEXT NOT NULL UNIQUE CHECK (email ~* '^.+@.+\..+$'),
          password_hash TEXT NOT NULL
        );
      `),

      // Item(s) table setup
      client.query(`
        CREATE TABLE ${DATABASE_SCHEMA}.item (
          id SERIAL PRIMARY KEY,
          product TEXT NOT NULL,
          quantity INT NOT NULL,
          owner_id UUID REFERENCES ${DATABASE_SCHEMA}.user(id)
        );
      `),

      // History table setup
      client.query(`
        CREATE TABLE ${DATABASE_SCHEMA}.history (
          id SERIAL PRIMARY KEY,
          history JSON[],
          owner_id UUID REFERENCES ${DATABASE_SCHEMA}.user(id),
          created_at TIMESTAMP WITH TIME ZONE
        );
      `),

      // Create JWT composite type
      client.query(`
        CREATE TYPE ${DATABASE_SCHEMA}.jwt_token AS (
          role TEXT,
          user_id UUID,
          exp BIGINT
        );
      `)
    ]);

    // Create indexes for foreign keys (PGQL "references")
    await Promise.all([
      client.query(`CREATE INDEX ON ${DATABASE_SCHEMA}.item("owner_id");`),
      client.query(`CREATE INDEX ON ${DATABASE_SCHEMA}.history("owner_id");`),

      // Revoke priviledges from public schema before declaring functions
      client.query(
        `ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;`
      )
    ]);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: SCHEMA SCRIPT!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: SCHEMA SCRIPT!'));
    console.error(error);
  }
})();
