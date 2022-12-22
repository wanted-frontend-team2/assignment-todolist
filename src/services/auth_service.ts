import axiosRequest from './request';

export interface ContentsProps {
  email: string;
  password: string;
}

export const register = async (contents: ContentsProps) => {
  try {
    const res = await axiosRequest.post('/auth/signup', contents);
    return res;
  } catch (err) {
    throw new Error(`API 응답에 실패했습니다.${err}`);
  }
};

export const signIn = async (contents: ContentsProps) => {
  try {
    const res = await axiosRequest.post(`/auth/signin`, contents);
    return res;
  } catch (err) {
    throw new Error(`API 응답에 실패했습니다.${err}`);
  }
};
