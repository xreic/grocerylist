# Grocery List (SSR-GQL) v. AWS RDS + Heroku

AWS RDS + Heroku deployment.

This time with Next.js, Apollo, GraphQL, and PostGraphile.

## Table of Contents

- [Grocery List (SSR-GQL) v. AWS RDS + Heroku](#grocery-list-ssr-gql-v-aws-rds--heroku)
  - [Table of Contents](#table-of-contents)
  - [Tech](#tech)
  - [Usage](#usage)
  - [Related](#related)
  - [Requirements](#requirements)

## Tech

1. [Next.js](https://github.com/zeit/next.js/tree/canary/examples/api-routes-apollo-server-and-client)
2. [Apollo](https://www.apollographql.com)
3. [PostGraphile](https://www.graphile.org/postgraphile/)
4. [Emotion](https://emotion.sh/docs/introduction/)

## Usage

1. Fork/Clone repo
2. Adjust the `.env.samples` to `.env` to your needs
3. Install dependencies and run scripts
   1. `npm install`
   2. `npm run init`
      1. Only run this command once
   3. `npm run setup`
   4. `npm run next:build`
   5. `npm run next:start`

## Related

1. [Redux](https://github.com/xreic/hrla35-grocery-list/tree/redux)
2. [Non-Heroku](https://github.com/xreic/hrla35-grocery-list/tree/ssr-gql)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.16.2
  - The version used for development.
- etc
