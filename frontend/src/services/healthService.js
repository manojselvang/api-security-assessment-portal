
import api from './api';

export const getBackendHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};
