// Dependencies
import axios from 'axios';

const getItems = () => async (dispatch) => {
  const { data } = await axios.get('/groceries');
  dispatch({
    type: 'GET_ITEMS',
    payload: data
  });
};

export default getItems;
