const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'GET_ITEMS':
      return action.payload;
    case 'SET_ITEM':
      return state.map((item) => {
        if (item.uuid === action.payload.uuid)
          return { ...item, status: action.payload.status };
        return item;
      });
    default:
      return state;
  }
};

export default items;
