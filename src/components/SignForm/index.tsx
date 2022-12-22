import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserValues, Valid } from '../../types/Auth';
import SignInput from '../SignInput';
import { inputs } from '../../constants/inputs';
import signRequest from '../../services/auth_service';

export default function SignForm() {
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

  const currentSignFormTitle = signFormStatus === `signin` ? 'Login' : 'SignUp';
  const changeFormMessage =
    signFormStatus === 'signin' ? '계정이 없으신가요?' : '계정이 있으신가요?';
  const nextSignFormTitle = signFormStatus === 'signin' ? 'SignUp' : 'Login';
  const userId = userValues.email.split('@')[0];

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
      navigate('/error', { state: { message: currentSignFormTitle } });
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValid(prev => ({ ...prev, [e.target.name]: e.target.validity.valid }));
    setUserValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>{currentSignFormTitle}</h1>
        {inputs.map(input => (
          <SignInput
            key={input.id}
            pattern={input.pattern}
            value={userValues[input.name]}
            onChange={handleOnChange}
            isValid={isValid[input.name]}
            {...input}
          />
        ))}

        <button type="submit">{currentSignFormTitle}</button>
      </form>
      <div>
        <p>{changeFormMessage}</p>

        {/* 로그인 회원가입 전환 버튼 (버튼 스타일 제거 필요) */}
        <button type="button" onClick={handleChangeFormStatus}>
          {nextSignFormTitle}
        </button>
      </div>
    </main>
  );
}
