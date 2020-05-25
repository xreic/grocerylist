# Grocery List

AWS RDS + EC2 deployment.

This time with Next.js, Apollo, GraphQL, and PostGraphile.

## Table of Contents

- [Grocery List](#grocery-list)
  - [Table of Contents](#table-of-contents)
  - [Tech](#tech)
  - [Setup your own](#setup-your-own)
  - [Related](#related)
  - [Requirements](#requirements)

## Tech

1. [Next.js](https://github.com/zeit/next.js/tree/canary/examples/api-routes-apollo-server-and-client)
2. [Apollo](https://www.apollographql.com)
3. [PostGraphile](https://www.graphile.org/postgraphile/)
4. [Emotion](https://emotion.sh/docs/introduction/)

## Setup your own

1. Start up an instance of:
   1. AWS RDS - PostgreSQL
      1. [Enable Force_SSL](https://stackoverflow.com/questions/35247347/point-heroku-application-to-aws-rds-database)
      2. Allow all traffic or specify
         1. This app defaults to all traffic
   2. AWS EC2
      1. Install Node v12+
2. Pull down the repo
   1. Create your own environment variables (`ecosystem.config.js`) file with `ecosystem.config.sample.js`
   2. Install dependencies (run in the root directory of the repo)
      1. `npm install`
      2. `npm run init`
         1. Only run this command once
      3. `npm run setup`
         1. This can be run as many times as you want to reset AWS RDS
      4. `npm run build`
         1. This seems to make the EC2 instance hang if you run it without rebooting inbetween
      5. `npm run pm2`
         1. Defaults
            1. `next start` executes on port 8080
            2. `express-postgraphile` server listens on 8000
            3. `pm2` script runs on production on default
               1. `--env prod` to `--env dev` for development

## Related

1. [Redux](https://github.com/xreic/hrla35-grocery-list/tree/redux)
2. [Non-Heroku](https://github.com/xreic/hrla35-grocery-list/tree/ssr-gql)

## Requirements

- Node 12.16.2
  - The version used for development.
- etc
