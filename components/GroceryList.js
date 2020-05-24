// Dependnencies
import { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

// Styles
import { Box, Heading, SimpleGrid, Stack, useToast } from '@chakra-ui/core';

// Helpers
import { USERS_ITEMS_QUERY } from '../lib/apollo/queries';
import { REMOVE_ITEM_MUTATION } from '../lib/apollo/mutations';
import { doctorError } from '../lib/doctorError';

// React
import { ShoppingContext } from '../lib/React/ShoppingContext';
import GroceryCheckout from './GroceryCheckout';
import Item from './Item';
import Loading from './Loading';

const GroceryList = () => {
  // Hooks + Contexts
  const toast = useToast();
  const { isShopping } = useContext(ShoppingContext);

  // Apollo
  const { data, loading, error } = useQuery(USERS_ITEMS_QUERY);
  const [deleteItem] = useMutation(REMOVE_ITEM_MUTATION);

  // Handlers
  const handleClick = async (id) => {
    try {
      await deleteItem({
        variables: { input: { id } },

        optimisticResponse: {
          __typename: 'Mutation',
          deleteItem: {
            item: { id }
          }
        },

        update: (cache, { data: { deleteItem } }) => {
          const { currentUserItems } = cache.readQuery({
            query: USERS_ITEMS_QUERY
          });
          const { nodes } = currentUserItems;
          const { id } = deleteItem.item;

          cache.writeQuery({
            query: USERS_ITEMS_QUERY,
            data: {
              currentUserItems: {
                nodes: nodes.filter((node) => node.id !== id)
              }
            }
          });
        }
      });
    } catch (error) {
      toast({
        description: doctorError(error.message),
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    }
  };

  if (error) {
    toast({
      description: doctorError(error.message),
      status: 'error',
      duration: 9001,
      isClosable: true
    });
  }

  if (loading) return <Loading />;

  if (data?.currentUserItems.nodes.length) {
    const list = data.currentUserItems.nodes;

    return (
      <React.Fragment>
        {!isShopping && <GroceryCheckout />}
        <Stack
          width="60%"
          maxWidth="500px"
          minWidth="300px"
          margin="auto"
          spacing="0.5rem"
        >
          <SimpleGrid columns="3">
            <Heading as="h4" size="lg">
              Item
            </Heading>
            <Heading as="h4" size="lg">
              Quantity
            </Heading>
          </SimpleGrid>
          <Box>
            {list.map((item) => (
              <Item
                key={item.id + item.product}
                id={item.id}
                product={item.product}
                quantity={item.quantity}
                handleClick={handleClick}
              />
            ))}
          </Box>
        </Stack>
      </React.Fragment>
    );
  } else {
    return (
      <Heading as="h4" size="lg">
        Remember to add to your list. 📝
      </Heading>
    );
  }
};

export default GroceryList;
