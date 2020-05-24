// Dependencies
import { useRef, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

// Styles
import { Box, Flex, Grid, useToast } from '@chakra-ui/core';
import { StyledButton, StyledInput } from '../shared/styles';
import { MdAddShoppingCart } from 'react-icons/md';

// Helpers
import { USERS_ITEMS_QUERY } from '../lib/apollo/queries';
import { ADD_ITEM_MUTATION } from '../lib/apollo/mutations';
import { doctorError } from '../lib/doctorError';

const GroceryForm = () => {
  // Form Refs
  const productRef = useRef('');
  const quantityRef = useRef('');

  // Hooks
  const toast = useToast();
  const [isCalling, setIsCalling] = useState(false);

  // Apollo
  const [addItem] = useMutation(ADD_ITEM_MUTATION);

  // Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCalling(true);

    const input = {
      product: productRef.current.value,
      quantity: parseInt(quantityRef.current.value)
    };

    try {
      await addItem({
        variables: { input },

        optimisticResponse: {
          __typename: 'Mutation',
          addItem: {
            item: {
              id: Math.round(Math.random() * -1000000),
              ...input
            }
          }
        },

        update: (cache, { data: { addItem } }) => {
          const { currentUserItems } = cache.readQuery({
            query: USERS_ITEMS_QUERY
          });
          const { nodes } = currentUserItems;
          const { item } = addItem;

          cache.writeQuery({
            query: USERS_ITEMS_QUERY,
            data: { currentUserItems: { nodes: [item, ...nodes] } }
          });
        }
      });

      productRef.current.value = '';
      quantityRef.current.value = '';

      productRef.current.focus();
    } catch (error) {
      toast({
        description: doctorError(error.message),
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    } finally {
      setIsCalling(false);
      productRef.current.focus();
    }
  };

  return (
    <Flex justify="center">
      <form method="post" onSubmit={handleSubmit}>
        <Grid templateColumns="5fr 1fr">
          <Box>
            <StyledInput
              type="text"
              placeholder="Product"
              isDisabled={isCalling}
              ref={productRef}
              isRequired
            />
            <StyledInput
              type="number"
              placeholder="Quantity"
              isDisabled={isCalling}
              ref={quantityRef}
              isRequired
            />
          </Box>
          <StyledButton
            type="submit"
            variantColor="blue"
            icon={MdAddShoppingCart}
            isLoading={isCalling}
            isDisabled={isCalling}
            aira-busy={isCalling}
            aira-label="Add into to your grocery list"
            height
          />
        </Grid>
      </form>
    </Flex>
  );
};

export default GroceryForm;
