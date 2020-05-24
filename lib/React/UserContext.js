// Dependencies
import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

// Contexts
const UserContext = createContext({});

const User = (props) => {
  const [user, setUser] = useState(!!Cookies.get('grocerylist_auth_token'));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default User;

export { UserContext };
