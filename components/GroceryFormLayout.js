// Dependencies
import { useContext } from 'react';
import NoSSR from 'react-no-ssr';

// Styles
import { IconButton, Stack } from '@chakra-ui/core';
import { MdAddShoppingCart, MdReceipt } from 'react-icons/md';

// React
import GroceryForm from './GroceryForm';
import { ShoppingContext } from '../lib/React/ShoppingContext';

const GroceryFormLayout = () => {
  // Contexts
  const { isShopping, setIsShopping } = useContext(ShoppingContext);

  // Handlers
  const handleClick = () => {
    setIsShopping(!isShopping);
  };

  return (
    <Stack spacing="2rem" paddingBottom="2rem">
      <IconButton
        variantColor="blue"
        icon={isShopping ? MdAddShoppingCart : MdReceipt}
        width="65%"
        maxWidth="300px"
        alignSelf="center"
        onClick={handleClick}
        aria-label={`Click to switch from ${
          isShopping ? 'add to remove' : 'remove to add'
        }`}
      />
      {isShopping && (
        <NoSSR>
          <GroceryForm />
        </NoSSR>
      )}
    </Stack>
  );
};

export default GroceryFormLayout;
