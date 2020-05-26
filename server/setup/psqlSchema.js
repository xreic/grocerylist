require('dotenv').config();
const { RDS_INIT } = require('../connections');
const { Client } = require('pg');
const chalk = require('chalk');

const client = new Client({ connectionString: RDS_INIT });

(async () => {
  try {
    await client.connect();

    // Drop all schemas and tables
    // prettier-ignore
    await Promise.all([
      client.query(
        `DROP SCHEMA IF EXISTS ${process.env.DATABASE_SCHEMA} CASCADE;`
      ),

      client.query(
        `DROP SCHEMA IF EXISTS ${process.env.DATABASE_SCHEMA}_private CASCADE;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${process.env.DATABASE_SCHEMA}.user;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${process.env.DATABASE_SCHEMA}_private.user_account;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${process.env.DATABASE_SCHEMA}.item;`
      ),

      client.query(
        `DROP TABLE IF EXISTS ${process.env.DATABASE_SCHEMA}.history;`
      )
    ]);

    /**
     * Create all schemas
     * Separate from tables to make sure this goes first
     */
    await Promise.all([
      client.query(`CREATE SCHEMA ${process.env.DATABASE_SCHEMA};`),

      client.query(`CREATE SCHEMA ${process.env.DATABASE_SCHEMA}_private;`)
    ]);

    // Create all tables and JWT composite type
    await Promise.all([
      // Allow current schema to access functions
      // client.query(
      //   `ALTER DATABASE template1 SET search_path TO ${process.env.DATABASE_SCHEMA}, extensions;`
      // ),

      // User(s) table setup
      client.query(`
        CREATE TABLE ${process.env.DATABASE_SCHEMA}.user (
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
        CREATE TABLE ${process.env.DATABASE_SCHEMA}_private.user_account (
          user_id UUID PRIMARY KEY REFERENCES ${process.env.DATABASE_SCHEMA}.user(id) ON DELETE CASCADE,
          email TEXT NOT NULL UNIQUE CHECK (email ~* '^.+@.+\..+$'),
          password_hash TEXT NOT NULL
        );
      `),

      // Item(s) table setup
      client.query(`
        CREATE TABLE ${process.env.DATABASE_SCHEMA}.item (
          id SERIAL PRIMARY KEY,
          product TEXT NOT NULL,
          quantity INT NOT NULL,
          owner_id UUID REFERENCES ${process.env.DATABASE_SCHEMA}.user(id)
        );
      `),

      // History table setup
      client.query(`
        CREATE TABLE ${process.env.DATABASE_SCHEMA}.history (
          id SERIAL PRIMARY KEY,
          history JSON[],
          owner_id UUID REFERENCES ${process.env.DATABASE_SCHEMA}.user(id),
          created_at TIMESTAMP WITH TIME ZONE
        );
      `),

      // Create JWT composite type
      client.query(`
        CREATE TYPE ${process.env.DATABASE_SCHEMA}.jwt_token AS (
          role TEXT,
          user_id UUID,
          exp BIGINT
        );
      `)
    ]);

    // Create idnexes for foreign keys (PGQL "references")
    await Promise.all([
      client.query(
        `CREATE INDEX ON ${process.env.DATABASE_SCHEMA}.item("owner_id");`
      ),
      client.query(
        `CREATE INDEX ON ${process.env.DATABASE_SCHEMA}.history("owner_id");`
      ),

      // Revoke priviledges from public schema before declaring functions
      client.query(
        `ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;`
      )
    ]);

    await client.end();
    console.log(chalk.black.bgGreen('SUCCESS: SCHEMA Script!'));
  } catch (error) {
    console.error(chalk.black.bgRed('ERROR: SCHEMA Script!'));
    console.error(error);
  }
})();
