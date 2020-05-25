// Dependencies
const express = require('express');
const cors = require('cors');
const { postgraphile } = require('postgraphile');
const { AWS_INIT, POSTGRAPHILE } = require('./connections');

// Express
const server = express();
const port = process.env.PGQL_PORT || 8000;

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
    process.env.DATABASE_SCHEMA,
    Object.assign(optionDefaults, optionsAddons)
  )
);

server.listen(port, () => console.log(`Postgraphile @ port ${port}!`));
