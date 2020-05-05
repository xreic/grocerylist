// Dependencies
import React from 'react';

// ChakraUI
import { SimpleGrid, Text } from '@chakra-ui/core';

const Item = ({ uuid, item, quantity, status, handleClick }) => {
  return (
    <SimpleGrid
      columns="2"
      onClick={() => handleClick(uuid, status)}
      as={status ? 's' : null}
    >
      <Text>{item}</Text>
      <Text>{quantity}</Text>
    </SimpleGrid>
  );
};

export default Item;
