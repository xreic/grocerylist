import { createContext, Component } from 'react';

const StatusContext = createContext({});

class Status extends Component {
  state = { status: [] };

  addToHistory = (payload) => {
    this.setState({ status: [payload, ...this.state.status] });
  };

  removeFromHistory = (id) => {
    this.setState({
      status: this.state.status.filter((item) => id !== item.id)
    });
  };

  clear = () => {
    this.setState({ status: [] });
  };

  render() {
    const { addToHistory, removeFromHistory, clear } = this;
    const { status } = this.state;
    const value = { status, addToHistory, removeFromHistory, clear };

    return (
      <StatusContext.Provider value={value}>
        {this.props.children}
      </StatusContext.Provider>
    );
  }
}

export default Status;

export { StatusContext };
