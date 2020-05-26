require('dotenv').config();

const RDS_ROOT =
  'progres://' +
  process.env.RDS_USER +
  ':' +
  process.env.RDS_PASSWORD +
  '@' +
  process.env.RDS_ENDPOINT +
  ':' +
  process.env.RDS_PORT +
  '/postgres?sslrootcert=rds-combined-ca-bundle.pem&sslmode=require';

const RDS_INIT_POSTGRES =
  'postgres://' +
  process.env.DATABASE_SCHEMA +
  '_initiator:' +
  process.env.DATABASE_INIT_PASSWORD +
  '@' +
  process.env.RDS_ENDPOINT +
  ':' +
  process.env.RDS_PORT +
  '/postgres?sslrootcert=rds-combined-ca-bundle.pem&sslmode=require';

const RDS_INIT =
  'postgres://' +
  process.env.DATABASE_SCHEMA +
  '_initiator:' +
  process.env.DATABASE_INIT_PASSWORD +
  '@' +
  process.env.RDS_ENDPOINT +
  ':' +
  process.env.RDS_PORT +
  '/' +
  process.env.DATABASE_NAME +
  '?sslrootcert=rds-combined-ca-bundle.pem&sslmode=require';

const POSTGRAPHILE =
  'postgres://' +
  process.env.DATABASE_SCHEMA +
  '_postgraphile:' +
  process.env.POSTGRAPHILE_PASSWORD +
  '@' +
  process.env.RDS_ENDPOINT +
  ':' +
  process.env.RDS_PORT +
  '/' +
  process.env.DATABASE_NAME +
  '?sslrootcert=rds-combined-ca-bundle.pem&sslmode=require';

module.exports = { RDS_ROOT, RDS_INIT_POSTGRES, RDS_INIT, POSTGRAPHILE };
