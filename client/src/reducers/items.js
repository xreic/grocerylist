const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'GET_ITEMS':
      return action.payload;
    default:
      return state;
  }
};

export default items;
