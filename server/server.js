// Dependencies
require('dotenv').config();
const { AWS_INIT, POSTGRAPHILE } = require('./connections');
const express = require('express');
const cors = require('cors');
const { postgraphile } = require('postgraphile');

// Express
const server = express();
const port = process.env.SERVER_PORT || 4001;

// PostgreSQL
const connectionString = POSTGRAPHILE;

console.log('====================================');
console.log('POSTGRAPHILE:', POSTGRAPHILE);
console.log('AWS_INIT:', AWS_INIT);
console.log('process.env.APP_SECRET:', process.env.APP_SECRET);
console.log('process.env.DATABASE_SCHEMA:', process.env.DATABASE_SCHEMA);
console.log('====================================');

// PostGraphile Options
const optionDefaults = {
  ownerConnectionString: AWS_INIT,
  pgDefaultRole: `${process.env.DATABASE_SCHEMA}_anonymous`,
  jwtSecret: process.env.APP_SECRET,
  jwtPgTypeIdentifier: `${process.env.DATABASE_SCHEMA}.jwt_token`,
  subscriptions: true,
  dynamicJson: true,
  ignoreRBAC: false,
  ignoreIndexes: false,
  enableQueryBatching: true,
  appendPlugins: [require('@graphile-contrib/pg-simplify-inflector')],
  legacyRelations: 'omit'
};

const optionsAddons =
  process.env.NODE_ENV === 'development'
    ? {
        // Development options
        graphiql: true,
        enhanceGraphiql: true,
        watchPg: true,
        exportGqlSchemaPath: 'schema.graphql',
        extendedErrors: ['hint', 'detail', 'errcode'],
        showErrorStack: 'json',
        setofFunctionsContainNulls: true
      }
    : {
        // Production options
        graphiql: false,
        retryOnInitFail: true,
        extendedErrors: ['errcode'],
        setofFunctionsContainNulls: false,
        /**
         * Default logging has performance issues
         * Make sure you have a logging system in place
         */
        disableQueryLog: true
      };

// Route middleware
server.use(cors());
server.use(
  postgraphile(
    connectionString,
    process.env.DATABASE_SCHEMA,
    Object.assign(optionDefaults, optionsAddons)
  )
);

server.listen(port, () => console.log('Postgraphile listening @ port:', port));
