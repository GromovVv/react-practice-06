/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => {
  return axios.get('/todos').then(response => response.data);
};



export default { fetchTodos, };
