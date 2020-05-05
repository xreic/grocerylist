// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Components
import Item from './Item';

// Redux
import getItems from '../../actions/getItems';
import setItem from '../../actions/setItem';

const mapStateToProps = (state) => {
  return { items: state.items };
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

  render() {
    if (this.props.items === 0) return null;
    return (
      <React.Fragment>
        {this.props.items.map((item) => (
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
