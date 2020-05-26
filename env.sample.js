/**
 * AWS EC2 Public IP Address
 * Defaults to localhost, so apolloClient.js doesn't break
 */
const AWS_EC2_PUBLIC_IP = 'localhost';

// Express + PostGraphile
const PGQL_PORT = 8000;

/**
 * AWS RDS
 */
const RDS_ENDPOINT = 'RDS_ENDPOINT';
const RDS_USER = 'postgres';
const RDS_PASSWORD = 'RDS_PASSWORD';
const RDS_PORT = '5432';
const DATABASE_NAME = 'groceries';
const DATABASE_SCHEMA = 'grocerylist';
const DATABASE_INIT_PASSWORD = 'DATABASE_INIT_PASSWORD';
const POSTGRAPHILE_PASSWORD = 'POSTGRAPHILE_PASSWORD';
const APP_SECRET = 'APP_SECRET';

// For PM2 ecosystem.config.js
const options = {
  RDS_ENDPOINT,
  RDS_USER,
  RDS_PASSWORD,
  RDS_PORT,
  DATABASE_NAME,
  DATABASE_SCHEMA,
  DATABASE_INIT_PASSWORD,
  POSTGRAPHILE_PASSWORD,
  APP_SECRET
};

module.exports = {
  AWS_EC2_PUBLIC_IP,
  PGQL_PORT,
  RDS_ENDPOINT,
  RDS_USER,
  RDS_PASSWORD,
  RDS_PORT,
  DATABASE_NAME,
  DATABASE_SCHEMA,
  DATABASE_INIT_PASSWORD,
  POSTGRAPHILE_PASSWORD,
  APP_SECRET,
  options
};
