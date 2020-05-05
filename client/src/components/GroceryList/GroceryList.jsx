// Dependencies
import React from 'react';

// Styled-Components + ChakraUI
import { SimpleGrid, Heading } from '@chakra-ui/core';

const GroceryList = () => {
  return (
    <SimpleGrid columns="2">
      <Heading as="h3" size="lg">
        Item
      </Heading>
      <Heading as="h3" size="lg">
        Quantity
      </Heading>

      <span> frozen pizza </span>
      <span> 5 </span>
      <span> noosa yogurt </span>
      <span> 10 </span>
      <span> wine </span>
      <span> 2 </span>
      <span> iced coffee </span>
      <span> 1 </span>
      <span> pizza </span>
      <span> 1 </span>
    </SimpleGrid>
  );
};

export default GroceryList;
