
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8000/";

const api = axios.create({
    baseURL: API_BASE,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default api;
