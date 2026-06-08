import axios from 'axios';

// Central axios instance — all API calls go through here
// TODO: Add auth token interceptor, error handling
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
