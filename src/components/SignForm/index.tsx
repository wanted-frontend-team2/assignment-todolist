import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserValues } from '../../types/Auth';
import SignInput from '../SignInput';
import { inputs } from '../../constants/inputs';

export default function SignForm() {
  const navigate = useNavigate();
  const [signFormStatus, setSignFormStatus] = useState<'signin' | 'signup'>(
    'signin',
  );
  const [focused, setFocused] = useState(false);
  const [userValues, setUserValues] = useState<UserValues>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
    // try {
    //   const res = await postSignUp(signFormStatus, userValues);
    //   const token = res.access_token;
    //   localStorage.setItem('token', token);
    //
    if (signFormStatus === 'signin') navigate('/todo');
    //   if (signFormStatus === 'signup') handleChangeFormStatus();
    // } catch (err) {
    //   alert(`${currentSignFormTitle} 요청이 실패하였습니다.`);
    // }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeFormStatus = () => {
    setSignFormStatus(signFormStatus === 'signin' ? 'signup' : 'signin');
    setFocused(false);
    setUserValues({ email: '', password: '' });
  };

  const currentSignFormTitle = signFormStatus === `signin` ? 'Login' : 'SignUp';

  const changeFormMessage =
    signFormStatus === 'signin' ? '계정이 없으신가요?' : '계정이 있으신가요?';

  const nextSignFormTitle = signFormStatus === 'signin' ? 'SignUp' : 'Login';

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>{currentSignFormTitle}</h1>

        {inputs.map(input => (
          <SignInput
            key={input.id}
            {...input}
            value={userValues[input.name]}
            onChange={handleOnChange}
            setFocused={setFocused}
            focused={focused}
          />
        ))}

        <button type="button">{currentSignFormTitle}</button>
        <div>
          <p>{changeFormMessage}</p>

          {/* 로그인 회원가입 전환 버튼 */}
          <button type="button" onClick={handleChangeFormStatus}>
            {nextSignFormTitle}
          </button>
        </div>
      </form>
    </main>
  );
}
