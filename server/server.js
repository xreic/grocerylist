// Dependencies
const express = require('express');
const cors = require('cors');
const { postgraphile } = require('postgraphile');

// Environment Variables
const { PGQL_PORT, APP_SECRET, DATABASE_SCHEMA } = require('../env');

// PostgreSQL Connection Strings
const { RDS_INIT, POSTGRAPHILE } = require('./connections');

// Express
const server = express();
const port = PGQL_PORT || 8000;

// PostGraphile Options
const optionDefaults = {
  ownerConnectionString: RDS_INIT,
  pgDefaultRole: `${DATABASE_SCHEMA}_anonymous`,
  jwtSecret: APP_SECRET,
  jwtPgTypeIdentifier: `${DATABASE_SCHEMA}.jwt_token`,
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
        setofFunctionsContainNulls: true
        /**
         * Default logging has performance issues
         * Make sure you have a logging system in place
         */
        // disableQueryLog: true
      };

// Route middleware
server.use(cors());
server.use(
  postgraphile(
    POSTGRAPHILE,
    DATABASE_SCHEMA,
    Object.assign(optionDefaults, optionsAddons)
  )
);

server.listen(port, () => console.log(`Postgraphile @ port ${port}!`));
