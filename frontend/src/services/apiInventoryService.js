import api from './api';

export const getAllApis = async () => {
  const response = await api.get('/apis');
  return response.data;
};

export const createApi = async (apiData) => {
  const response = await api.post('/apis', apiData);
  return response.data;
};

export const getApiById = async (id) => {
  const response = await api.get(`/apis/${id}`);
  return response.data;
};