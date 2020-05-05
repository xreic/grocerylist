// Dependencies
import React from 'react';

// Components
import Items from './Items';

// Styled-Components + ChakraUI
import { SimpleGrid, Heading } from '@chakra-ui/core';

const GroceryList = () => {
  return (
    <React.Fragment>
      <SimpleGrid columns="2">
        <Heading as="h3" size="lg">
          Item
        </Heading>
        <Heading as="h3" size="lg">
          Quantity
        </Heading>
      </SimpleGrid>
      <Items />
    </React.Fragment>
  );
};

export default GroceryList;
