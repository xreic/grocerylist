// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// ChakraUI
import { SimpleGrid, Heading } from '@chakra-ui/core';

// Components
import Item from './Item';

// Redux
import getItems from '../../actions/getItems';
import setItem from '../../actions/setItem';

const mapStateToProps = (state) => {
  return { items: state.items, filter: state.filter };
};

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  setItem: (payload) => dispatch(setItem(payload))
});

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleClick = async (uuid, status) => {
    await axios.put('/groceries', { uuid, status: !status });
    this.props.setItem({ uuid, status: !status });
  };

  getFilteredItems = (items, filter) => {
    switch (filter) {
      case 'ALL':
        return items;
      case 'HAVE':
        return items.filter((item) => item.status);
      case 'NEED':
        return items.filter((item) => !item.status);
    }
  };

  render() {
    const data = this.getFilteredItems(this.props.items, this.props.filter);

    if (data.length === 0)
      return (
        <Heading as="h3" size="lg">
          No Items
        </Heading>
      );
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
        {data.map((item) => (
          <Item
            key={item.uuid}
            uuid={item.uuid}
            item={item.item}
            quantity={item.quantity}
            status={item.status}
            handleClick={this.handleClick}
          />
        ))}
      </React.Fragment>
    );
  }
}
const ConnectedItems = connect(mapStateToProps, mapDispatchToProps)(Items);

export default ConnectedItems;
