// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

// Components
import Item from './Item';

class Items extends Component {
  state = {};

  componentDidMount = async () => {
    let { data } = await axios.get('/groceries/');
    this.setState({ items: data });
  };

  render() {
    if (this.state.items === undefined) {
      return null;
    }
    return (
      <React.Fragment>
        {this.state.items.map((item) => (
          <Item
            key={item.uuid}
            uuid={item.uuid}
            item={item.item}
            quantity={item.quantity}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Items;
