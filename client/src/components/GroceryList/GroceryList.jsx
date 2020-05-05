// Dependencies
import React from 'react';

// Styled-Components + ChakraUI
import { List, ListItem } from '@chakra-ui/core';

const GroceryList = () => {
  return (
    <List styleType="disc">
      <ListItem>
        <span> frozen pizza </span>
        <span> 5 </span>
      </ListItem>
      <ListItem>
        <span> noosa yogurt </span>
        <span> 10 </span>
      </ListItem>
      <ListItem>
        <span> wine </span>
        <span> 2 </span>
      </ListItem>
      <ListItem>
        <span> iced coffe </span>
        <span> 1 </span>
      </ListItem>
      <ListItem>
        <span> a </span>
        <span> 1 </span>
      </ListItem>
      <ListItem>
        <span> pizza </span>
        <span> 1 </span>
      </ListItem>
    </List>
  );
};

export default GroceryList;
