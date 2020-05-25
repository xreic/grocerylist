import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import Cookies from 'js-cookie';

// Express server port
const port = process.env.SERVER_PORT || 4001;

/**
 * Artificial delay to test optimistic updates
 * link: authLink.concat(delay).concat(httpLink)
 */
const delay = setContext(
  (request) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        success();
      }, 2000);
    })
);

console.log(`http://localhost:${port}/graphql`);

/**
 * Two options
 *   Non-batched queries
 *     link: authLink.concat(httpLink)
 *   Batched queries
 *     link: authLink.concat(batchHTTPLink)
 *
 * For URI put in the path and add "/graphql" for express + postgraphile
 */
const httpLink = createHttpLink({
  uri: `http://localhost:${port}/graphql`,
  credentials: 'include'
});

const batchHTTPLink = new BatchHttpLink({
  uri: `http://localhost:${port}/graphql`,
  credentials: 'include',
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
