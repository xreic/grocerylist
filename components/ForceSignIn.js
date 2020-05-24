// Dependencies
import { useContext } from 'react';

// React
import { UserContext } from '../lib/React/UserContext';
import SignInForm from './SignInForm';

const ForceSignIn = (props) => {
  const { user } = useContext(UserContext);

  if (user) return props.children;
  else return <SignInForm />;
};

export default ForceSignIn;
