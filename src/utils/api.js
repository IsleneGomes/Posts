import axios from 'axios';

const api = axios.create({
  baseURL: 'http://segware-book-api.segware.io/api'
});


export default api;