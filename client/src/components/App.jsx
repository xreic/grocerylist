// Dependencies
import React, { Component } from 'react';

// Styled-Components + ChakraUI
import styled from 'styled-components';
import { Box, Image, Heading, List, ListItem, Stack } from '@chakra-ui/core';

// Components
import GroceryForm from './Form/GroceryForm';
import GroceryList from './GroceryList/GroceryList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <HTMLBody>
        <BodyWrapper>
          <Image src="grocery-bags.png" display="inline" />

          <Stack spacing="1rem">
            <Heading>Grocery List</Heading>

            <Box>
              <GroceryForm />
            </Box>

            <Box>
              <GroceryList />
            </Box>
          </Stack>
        </BodyWrapper>
      </HTMLBody>
    );
  }
}

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
