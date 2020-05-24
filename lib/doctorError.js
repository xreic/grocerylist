import Cookies from 'js-cookie';

export const doctorError = (errorString) => {
  let fixedString;

  fixedString = errorString.replace('GraphQL error: ', '');

  if (fixedString.includes('permission denied for table item')) {
    fixedString = fixedString.replace(
      'permission denied for table item',
      "You don't have the permissions for that action."
    );
  }

  if (fixedString.includes('permission denied for function current_user')) {
    fixedString = fixedString.replace(
      'permission denied for function current_user',
      'Please sign in to use the app!'
    );
  }

  if (fixedString.includes('permission denied for function')) {
    fixedString = fixedString.replace(
      'permission denied for function add_item',
      "You don't have the permissions for that operation."
    );
  }

  if (
    fixedString.includes(
      'Network error: Response not successful: Received status code 403'
    )
  ) {
    fixedString = fixedString.replace(
      'Network error: Response not successful: Received status code 403',
      'Invalid credentials.'
    );
    Cookies.remove('grocerylist_auth_token');
    location.reload();
  }

  return fixedString;
};
