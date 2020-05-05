const filter = (state = { filter: 'ALL' }, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return 'ALL';
  }
};

export default filter;
