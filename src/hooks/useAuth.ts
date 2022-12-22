import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserValues, Valid, Error } from '../types/Auth';
import signRequest from '../services/auth_service';

const useAuth = () => {
  const navigate = useNavigate();
  const [signFormStatus, setSignFormStatus] = useState<'signin' | 'signup'>(
    'signin',
  );
  const [userValues, setUserValues] = useState<UserValues>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState<Valid>({
    email: false,
    password: false,
  });

  const userId = userValues.email.split('@')[0];
  const currentSignFormTitle = signFormStatus === `signin` ? 'Login' : 'SignUp';
  const changeFormMessage =
    signFormStatus === 'signin' ? '계정이 없으신가요?' : '계정이 있으신가요?';
  const nextSignFormTitle = signFormStatus === 'signin' ? 'SignUp' : 'Login';

  const handleChangeFormStatus = () => {
    setSignFormStatus(signFormStatus === 'signin' ? 'signup' : 'signin');
    setUserValues({ email: '', password: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signRequest(signFormStatus, userValues);
      const token = res.access_token;
      localStorage.setItem('token', token);

      if (signFormStatus === 'signin') {
        alert(`환영합니다 ${userId}님`);
        navigate('/todo');
      }
      if (signFormStatus === 'signup') {
        alert('회원가입이 완료되었습니다');
        handleChangeFormStatus();
      }
    } catch (err) {
      const error = err as Error;
      const errorMessage = error.response.data.message;
      if (errorMessage === 'Unauthorized')
        alert('아이디와 비밀번호를 확인해주세요');
      else alert(errorMessage);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValid(prev => ({ ...prev, [e.target.name]: e.target.validity.valid }));
    setUserValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    signFormStatus,
    userValues,
    setUserValues,
    isValid,
    setIsValid,
    handleSubmit,
    handleOnChange,
    currentSignFormTitle,
    changeFormMessage,
    nextSignFormTitle,
    handleChangeFormStatus,
  };
};

export default useAuth;
