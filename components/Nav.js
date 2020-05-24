// Dependencies
import { useContext } from 'react';
import Cookies from 'js-cookie';

// Styles
import { Heading, Flex } from '@chakra-ui/core';

// React
import { UserContext } from '../lib/React/UserContext';

import NavSkeleton from './NavSkeleton';

const Nav = (props) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Flex justifyContent="space-evenly" paddingBottom="2rem">
      <NavSkeleton endpoint={'/history'} title="History" />
      <NavSkeleton endpoint={'/'} title="Home" />
      {user && (
        <Heading
          as="h1"
          size="2xl"
          cursor="pointer"
          onClick={() => {
            Cookies.remove('grocerylist_auth_token');
            setUser(false);
            props.client.clearStore();
          }}
        >
          Sign Out
        </Heading>
      )}
    </Flex>
  );
};

export default Nav;
