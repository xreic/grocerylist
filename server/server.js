// Dependencies
require('dotenv').config();
const { POSTGRAPHILE } = require('./connections');
const express = require('express');
const cors = require('cors');
const { postgraphile } = require('postgraphile');

// Express
const server = express();

// PostgreSQL
const connectionString = POSTGRAPHILE;

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

server.listen(process.env.PORT || 4000);
