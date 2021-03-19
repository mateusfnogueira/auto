import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.131.103.228:3333',
});

export default api;
