require('dotenv').config();

const AWS_ROOT =
  'progres://' +
  process.env.AWS_USER +
  ':' +
  process.env.AWS_PASSWORD +
  '@' +
  process.env.AWS_ENDPOINT +
  ':' +
  process.env.AWS_PORT +
  '/postgres';

const AWS_INIT_POSTGRES =
  'postgres://' +
  process.env.DATABASE_SCHEMA +
  '_initiator:' +
  process.env.DATABASE_INIT_PASSWORD +
  '@' +
  process.env.AWS_ENDPOINT +
  ':' +
  process.env.AWS_PORT +
  '/postgres';

const AWS_INIT =
  'postgres://' +
  process.env.DATABASE_SCHEMA +
  '_initiator:' +
  process.env.DATABASE_INIT_PASSWORD +
  '@' +
  process.env.AWS_ENDPOINT +
  ':' +
  process.env.AWS_PORT +
  '/' +
  process.env.DATABASE_NAME;

const POSTGRAPHILE =
  'postgres://' +
  process.env.DATABASE_SCHEMA +
  '_postgraphile:' +
  process.env.POSTGRAPHILE_PASSWORD +
  '@' +
  process.env.AWS_ENDPOINT +
  ':' +
  process.env.AWS_PORT +
  '/' +
  process.env.DATABASE_NAME;

module.exports = { AWS_ROOT, AWS_INIT_POSTGRES, AWS_INIT, POSTGRAPHILE };
