// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Item from './Item';

// Redux
import getItems from '../../actions/getItems';
const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems())
});

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }

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
          />
        ))}
      </React.Fragment>
    );
  }
}
const ConnectedItems = connect(mapStateToProps, mapDispatchToProps)(Items);

export default ConnectedItems;
