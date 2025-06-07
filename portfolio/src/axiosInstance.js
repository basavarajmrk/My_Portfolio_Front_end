import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || "https://myportfolio-304v.onrender.com/api";

const api = axios.create({
    baseURL: API_BASE,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;