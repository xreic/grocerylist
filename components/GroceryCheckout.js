// Dependencies
import { useContext, useState } from 'react';
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

const GroceryCheckout = () => {
  // Hooks + Contexts
  const toast = useToast();
  const [isCalling, setIsCalling] = useState(false);
  const { status, clear } = useContext(StatusContext);

  // Apollo
  const [addToHistory] = useMutation(ADD_TO_HISTORY_MUTATION);
  const [deleteItem] = useMutation(REMOVE_ITEM_MUTATION);

  // Handlers
  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsCalling(true);

    if (status.length < 1) {
      toast({
        description:
          'You must have at least one item selected before checking out.',
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    } else {
      const input = { products: status };

      try {
        await addToHistory({
          variables: { input },

          update: (cache, { data: { addToHistory } }) => {
            const {
              currentUserHistory: { nodes }
            } = cache.readQuery({
              query: USER_HISTORY_QUERY
            });

            const { history } = addToHistory;

            cache.writeQuery({
              query: USER_HISTORY_QUERY,
              data: {
                currentUserHistory: { nodes: [history, ...nodes] }
              }
            });
          }
        });

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

    setIsCalling(false);
  };

  return (
    <form method="post" onSubmit={handleCheckout}>
      <Button
        type="sumbit"
        variantColor="blue"
        alignSelf="center"
        maxWidth="300px"
        marginBottom="2rem"
        isLoading={isCalling}
        isDisabled={isCalling}
        aira-busy={isCalling}
        aria-label={`Checkout the selected items`}
      >
        Checkout
      </Button>
    </form>
  );
};

export default GroceryCheckout;
