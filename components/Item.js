// Dependencies
import { useContext, useState } from 'react';

// Styles
import { Flex, IconButton, SimpleGrid, Text } from '@chakra-ui/core';
import { MdRemoveCircleOutline, MdLabel, MdLabelOutline } from 'react-icons/md';

// React
import { ShoppingContext } from '../lib/React/ShoppingContext';
import { StatusContext } from '../lib/React/StatusContext';

const Item = ({ id, product, quantity, handleClick }) => {
  // Hooks + Contexts
  const [isSelected, setIsSelected] = useState(false);
  const { addToHistory, removeFromHistory } = useContext(StatusContext);
  const { isShopping } = useContext(ShoppingContext);

  // Handlers
  const changeStatus = (payload) => {
    if (isSelected) removeFromHistory(id);
    else addToHistory(payload);

    setIsSelected(!isSelected);
  };

  return (
    <SimpleGrid columns="3" paddingBottom="0.25rem">
      <Text alignSelf="center" as="b">
        {product}
      </Text>
      <Text alignSelf="center" as="b">
        {quantity}
      </Text>
      <Flex justify="center">
        {isShopping ? (
          <IconButton
            size="sm"
            variantColor="blue"
            icon={MdRemoveCircleOutline}
            onClick={() => handleClick(id)}
            aria-label="Click to remove from list"
          />
        ) : (
          <IconButton
            size="sm"
            variantColor="blue"
            icon={isSelected ? MdLabel : MdLabelOutline}
            onClick={() => changeStatus({ id, product, quantity })}
            aria-label={`Click to ${isSelected && 'de'}select`}
          />
        )}
      </Flex>
    </SimpleGrid>
  );
};
export default Item;
