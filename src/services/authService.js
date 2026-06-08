import api from './api';

// TODO: Add all auth-related API calls here
export const authService = {
  login:    (email, password) => api.post('/auth/login',    { email, password }),
  register: (name, email, password) => api.post('/auth/register', { name, email, password }),
  logout:   ()                => api.post('/auth/logout'),
};
