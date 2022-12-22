import SignInput from '../SignInput';
import { inputs } from '../../constants/inputs';
import useAuth from '../../hooks/useAuth';

export default function SignForm() {
  const {
    handleSubmit,
    currentSignFormTitle,
    userValues,
    handleOnChange,
    isValid,
    changeFormMessage,
    handleChangeFormStatus,
    nextSignFormTitle,
  } = useAuth();

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
