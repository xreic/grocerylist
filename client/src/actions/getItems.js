// Dependencies
import axios from 'axios';

const getItems = () => (dispatch) => {
  axios.get('/groceries').then(({ data }) => {
    dispatch({
      type: 'GET_ITEMS',
      payload: data
    });
  });
};

export default getItems;
