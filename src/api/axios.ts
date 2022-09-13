import axios from 'axios';

const baseURL = 'http://localhost:3000';

const instance = axios.create({baseURL});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');

  if (!config.headers) {
    config.headers = {};
  }

  config.headers.Authorization =  `Bearer ${token}`

  return config;
});

export const handleAxiosError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    if (error.response && error.response.data) {
      if (typeof error.response.data === 'object') {
        if ('message' in error.response.data) {
          return (error.response.data as {message: string}).message;
        }
      }
    }
  }

  return error?.message || 'Something went wrong';
}

export default instance;
