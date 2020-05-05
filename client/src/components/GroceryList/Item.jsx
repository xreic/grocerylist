// Dependencies
import React from 'react';

// ChakraUI
import { SimpleGrid, Text } from '@chakra-ui/core';

const Item = ({ uuid, item, quantity }) => {
  return (
    <SimpleGrid
      columns="2"
      onClick={() => {
        console.log(`${item} clicked.`, uuid);
      }}
    >
      <Text>{item}</Text>
      <Text>{quantity}</Text>
    </SimpleGrid>
  );
};

export default Item;
