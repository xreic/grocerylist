const {
  RDS_USER,
  RDS_PASSWORD,
  RDS_ENDPOINT,
  RDS_PORT,
  DATABASE_SCHEMA,
  DATABASE_INIT_PASSWORD,
  DATABASE_NAME,
  POSTGRAPHILE_PASSWORD
} = require('../env.js');

/**
 * Abstractions
 */

// If the PostgreSQL database is on localhost then the SSL string is not needed
const sslString =
  RDS_ENDPOINT !== 'localhost'
    ? '?sslrootcert=rds-combined-ca-bundle.pem&sslmode=require'
    : '';

// Combines the PostgreSQL database endpoint and port
const host = `${RDS_ENDPOINT}:${RDS_PORT}`;

// Combines the PostgreSQL database name with the SSL string for AWS RDS
const database = `${DATABASE_NAME}${sslString}`;

/**
 * PostgreSQL connection strings
 */

const RDS_ROOT = `progres://${RDS_USER}:${RDS_PASSWORD}@${host}/postgres${sslString}`;

const RDS_INIT_POSTGRES = `postgres://${DATABASE_SCHEMA}_initiator:${DATABASE_INIT_PASSWORD}@${host}/postgres${sslString}`;

const RDS_INIT = `postgres://${DATABASE_SCHEMA}_initiator:${DATABASE_INIT_PASSWORD}@${host}/${database}`;

const POSTGRAPHILE = `postgres://${DATABASE_SCHEMA}_postgraphile:${POSTGRAPHILE_PASSWORD}@${host}/${database}`;

module.exports = { RDS_ROOT, RDS_INIT_POSTGRES, RDS_INIT, POSTGRAPHILE };
