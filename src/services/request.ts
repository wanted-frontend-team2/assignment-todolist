import axios from 'axios';
import API from '../config/api';

export const ACCESS_TOKEN_KEY = 'token';

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
        const conf = config;
        conf.headers!.Authorization = `Bearer ${storageToken}`;
        return conf;
      }
    } catch (err) {
      console.error(`[_axios.interceptors.request] config : ${err}`);
    }
    return config;
  },
  error => Promise.reject(error),
);
export default axiosRequest;
