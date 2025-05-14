import api from '../axiosInstance';

export const getHome = () => api.get('/home/').then(res => res.data);
export const getProjects = () => api.get('/projects/').then(res => res.data);
export const getExperience = () => api.get('/experience/').then(res => res.data);
export const getContact  = () => api.get('/contact/').then(res => res.data)
export const getProjectById = (id) =>
    api.get(`/projects/${id}/`).then(res => res.data);
