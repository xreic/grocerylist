import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import Cookies from 'js-cookie';

import { AWS_EC2_PUBLIC_IP, PGQL_PORT } from './env';

// Environement Variables & Abstractions
if (!AWS_EC2_PUBLIC_IP)
  throw new Error(
    'Remember to add your AWS EC2 public IP address or set it to localhost'
  );

const port = PGQL_PORT || 8000;
const uri = `http://${AWS_EC2_PUBLIC_IP}:${port}/graphql`;

/**
 * Two options
 *   Non-batched queries
 *     link: authLink.concat(httpLink)
 *   Batched queries
 *     link: authLink.concat(batchHTTPLink)
 *
 * For URI put in the path and add "/graphql" for express + postgraphile
 */
const httpLink = createHttpLink({ uri });

const batchHTTPLink = new BatchHttpLink({
  uri,
  batchMax: 10,
  batchInterval: 100
});

// Used to set the headers
const authLink = setContext(() => {
  // Attempt to retrieve the JWT
  const token = Cookies.get('grocerylist_auth_token');
  // Applies the headers with the JWT if the JWT exists
  return {
    headers: {
      ...(token !== undefined ? { authorization: `Bearer ${token}` } : {})
    }
  };
});

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    // includeExtensions: true,
    // addTypename: false,
    ssrMode: Boolean(ctx),
    link: authLink.concat(batchHTTPLink),
    cache: new InMemoryCache({
      addTypename: false
    })
  });
}
