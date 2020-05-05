const rootReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        items: [...state.items, action.payload]
      });
    case 'GET_ITEMS':
      return Object.assign({}, state, {
        items: [...state.items, ...action.payload]
      });
    default:
      return state;
  }
};

export default rootReducer;
