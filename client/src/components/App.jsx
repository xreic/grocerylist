// Dependencies
import React from 'react';

// Styled-Components + ChakraUI
import styled from 'styled-components';
import { Box, Image, Heading, Stack } from '@chakra-ui/core';

// Components
import ConnectedForm from './Form/GroceryForm';
import GroceryList from './GroceryList/GroceryList';
import ConnectedFilter from './Filter';

// Containers

const App = () => (
  <HTMLBody>
    <BodyWrapper>
      <Image src="grocery-bags.png" display="inline" />

      <Stack spacing="1rem">
        <Heading>Grocery List</Heading>

        <Box>
          <ConnectedForm />
        </Box>

        <Box>
          <ConnectedFilter />
        </Box>

        <Box>
          <GroceryList />
        </Box>
      </Stack>
    </BodyWrapper>
  </HTMLBody>
);

export default App;

const HTMLBody = styled(Box)`
  font-family: Arial, Helvetica, sans-serif;
  background-color: honeydew;
  color: seagreen;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BodyWrapper = styled(Box)`
  width: 50%;
  margin: auto;
  text-align: center;
`;
