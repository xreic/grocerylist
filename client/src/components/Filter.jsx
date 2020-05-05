// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Styled-Components + ChakraUI
import { Link, SimpleGrid, Heading } from '@chakra-ui/core';

// Redux
import setFilter from '../actions/setFilter';

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter))
});

const Filter = (props) => {
  return (
    <SimpleGrid columns="3">
      <Heading size="lg" display="inline">
        <Link onClick={() => props.setFilter('ALL')}>All</Link>
      </Heading>
      <Heading size="lg" display="inline">
        <Link onClick={() => props.setFilter('HAVE')}>Have</Link>
      </Heading>
      <Heading size="lg" display="inline">
        <Link onClick={() => props.setFilter('NEED')}>Need</Link>
      </Heading>
    </SimpleGrid>
  );
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
