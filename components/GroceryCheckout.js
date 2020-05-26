// Dependencies
import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';

// Styles
import { Button, useToast } from '@chakra-ui/core';

// Apollo + Helpers
import { USERS_ITEMS_QUERY, USER_HISTORY_QUERY } from '../lib/apollo/queries';
import {
  ADD_TO_HISTORY_MUTATION,
  REMOVE_ITEM_MUTATION
} from '../lib/apollo/mutations';
import { doctorError } from '../lib/doctorError';

// React
import { StatusContext } from '../lib/React/StatusContext';

/**
 * This component handles all the functionality for
 * when a user wants to checkout items
 */
const GroceryCheckout = () => {
  // Hooks + Contexts
  const toast = useToast();
  const { status, clear } = useContext(StatusContext);

  // Apollo
  const [addToHistory] = useMutation(ADD_TO_HISTORY_MUTATION);
  const [deleteItem] = useMutation(REMOVE_ITEM_MUTATION);

  // Handlers
  const handleCheckout = async (e) => {
    e.preventDefault();

    // If no items are selected, then do not proceed
    if (status.length < 1) {
      toast({
        description:
          'You must have at least one item selected before checking out.',
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    } else {
      const input = { products: status, createdat: new Date() };

      try {
        /**
         * Adds the items to the history
         * No optimistic response as a view switch is required to see the history
         */
        await addToHistory({
          variables: { input },

          update: (cache, { data: { addToHistory } }) => {
            // Destructure the required information out from the cache
            const {
              currentUserHistory: { nodes }
            } = cache.readQuery({
              query: USER_HISTORY_QUERY
            });

            const { history } = addToHistory;

            // Rewrite the cache with the new information
            cache.writeQuery({
              query: USER_HISTORY_QUERY,
              data: {
                currentUserHistory: { nodes: [history, ...nodes] }
              }
            });
          }
        });

        /**
         * For all items selected, this will remove it from the list
         */
        await status.forEach(async (item) => {
          await deleteItem({
            variables: { input: { id: item.id } },

            optimisticResponse: {
              __typename: 'Mutation',
              deleteItem: {
                item: { id: item.id }
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
        });

        clear();
      } catch (error) {
        toast({
          description: doctorError(error.message),
          status: 'error',
          duration: 9001,
          isClosable: true
        });
      }
    }
  };

  return (
    <form method="post" onSubmit={handleCheckout}>
      <Button
        type="sumbit"
        variantColor="blue"
        alignSelf="center"
        maxWidth="300px"
        marginBottom="2rem"
        aria-label={`Checkout the selected items`}
      >
        Checkout
      </Button>
    </form>
  );
};

export default GroceryCheckout;
