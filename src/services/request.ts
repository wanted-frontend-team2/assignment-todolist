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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        conf.headers!.Authorization = `Bearer ${storageToken}`;
        return conf;
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`[_axios.interceptors.request] config : ${err}`);
    }
    return config;
  },
  error => Promise.reject(error),
);
export default axiosRequest;
