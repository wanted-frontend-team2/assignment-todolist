import axiosRequest from './request';
import { UserValues } from '../types/Auth';

const signRequest = async (endpoint: string, userValues: UserValues) => {
  const { email, password } = userValues;
  const res = await axiosRequest.post(`/auth/${endpoint}`, {
    email,
    password,
  });
  return res.data;
};

export default signRequest;
