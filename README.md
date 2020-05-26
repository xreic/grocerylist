# Grocery List

Simple grocery list web app deployed on AWS RDS + EC2 deployment.

This time with Next.js, Apollo, GraphQL, and PostGraphile (with JWT for authentication and authorization).

## Table of Contents

- [Grocery List](#grocery-list)
  - [Table of Contents](#table-of-contents)
  - [Tech](#tech)
  - [Related](#related)
  - [Notes](#notes)
  - [Setup your own](#setup-your-own)
  - [Requirements](#requirements)

## Tech

1. [Next.js](https://github.com/zeit/next.js/tree/canary/examples/api-routes-apollo-server-and-client)
2. [Apollo](https://www.apollographql.com)
3. [PostGraphile](https://www.graphile.org/postgraphile)
4. [AWS RDS](https://aws.amazon.com/rds)
5. [Emotion](https://emotion.sh/docs/introduction)

## Related

1. [SSR-GQL-PGQL](https://github.com/xreic/grocerylist)
   1. SSR: [Next.js](https://nextjs.org)
   2. GQL: [Apollo GraphQL](https://www.apollographql.com)
   3. PGQL: [PostGraphile](https://www.graphile.org/postgraphile)
2. [Redux](https://github.com/xreic/hrla35-grocery-list/tree/redux)

## Notes

If you are running on Windows and want to use `nodemon` for the `express-postgraphile` server combo, then you'll have to create a `.env` file based on the `options` within `ecosystem.config.sample.js`.
Once complete, run `npm run w-dev:dev` for development or `npm run w-dev:prod` for production.

## Setup your own

1. Start up an instance of:
   1. AWS RDS - PostgreSQL
      1. [Enable Force_SSL](https://stackoverflow.com/questions/35247347/point-heroku-application-to-aws-rds-database)
      2. Allow all traffic or specify
         1. This app defaults to all traffic
   2. AWS EC2
      1. Install Node v12+
      2. Install [PM2](https://github.com/Unitech/pm2)
2. Pull down the repo
   1. Create `env.js` and `ecosystem.config.js`
      1. Follow the samples
   2. Install dependencies (run in the root directory of the repo)
      1. `npm install`
   3. Run scripts
      1. For first time setup
         1. `npm run first-time-setup`
            1. DO NOT RUN THIS MORE THAN ONCE
            2. This will setup the PostgreSQL database and run the build script
            3. Go to Step 4
         2. `npm run setup`
            1. This will reset the database
            2. Go to Step 3
         3. `npm run build`
            1. Build script
            2. Go to Step 4
         4. `npm run pm2`
            1. Starts the app

## Requirements

- Node 12.16.2
  - The version used for development.
- PM2
  - For daemonizing the modules of the app.
- Nodemon
  - For development testing.
