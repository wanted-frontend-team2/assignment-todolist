import axios from 'axios';
import API from '../config/api';

const ACCESS_TOKEN_KEY = 'accessToken';

const axiosRequest = axios.create({
  baseURL: API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRequest.interceptors.request.use(
  config => {
    const storageToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    try {
      if (storageToken) {
        config.headers!.Authorization = `Bearer ${storageToken}`;
      }
      return config;
    } catch (err) {
      console.error(`[_axios.interceptors.request] config : ${err}`);
    }
    return config;
  },
  error => Promise.reject(error),
);
export default axiosRequest;
