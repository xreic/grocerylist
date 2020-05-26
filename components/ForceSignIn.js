// Dependencies
import { useContext } from 'react';

// React
import { UserContext } from '../lib/React/UserContext';
import SignInForm from './SignInForm';

/**
 * This components checks whether or not a user is signed in
 * If a user is not signed in, then they will be forced to
 *   register or sign in to proceed
 * Else they can proceed to the app
 */
const ForceSignIn = (props) => {
  const { user } = useContext(UserContext);

  if (user) return props.children;
  else return <SignInForm />;
};

export default ForceSignIn;
