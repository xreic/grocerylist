import gql from 'graphql-tag';

export const USERS_ITEMS_QUERY = gql`
  query USERS_ITEMS_QUERY {
    currentUserItems {
      nodes {
        id
        product
        quantity
      }
    }
  }
`;

export const USER_HISTORY_QUERY = gql`
  query USER_HISTORY_QUERY {
    currentUserHistory {
      nodes {
        id
        history
        createdAt
      }
    }
  }
`;
