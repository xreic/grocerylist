import gql from 'graphql-tag';

export const ADD_ITEM_MUTATION = gql`
  mutation ADD_ITEM_MUTATION($input: AddItemInput!) {
    addItem(input: $input) {
      item {
        id
        product
        quantity
      }
    }
  }
`;

export const REMOVE_ITEM_MUTATION = gql`
  mutation REMOVE_ITEM_MUTATION($input: DeleteItemInput!) {
    deleteItem(input: $input) {
      item {
        id
      }
    }
  }
`;

export const ADD_TO_HISTORY_MUTATION = gql`
  mutation ADD_TO_HISTORY_MUTATION($input: AddToHistoryInput!) {
    addToHistory(input: $input) {
      history {
        id
        history
        createdAt
      }
    }
  }
`;

export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($input: AuthenticateInput!) {
    authenticate(input: $input) {
      jwtToken
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation REGISTER_USER_MUTATION($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        displayname
      }
    }
  }
`;
