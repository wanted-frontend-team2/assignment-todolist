import SignInput from '../SignInput';
import { inputs } from '../../constants/inputs';
import useAuth from '../../hooks/useAuth';
import * as S from './index.style';

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
    isButtonDisabled,
  } = useAuth();

  return (
    <S.Main>
      <S.Title>{currentSignFormTitle}</S.Title>
      <form onSubmit={handleSubmit}>
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
        <S.Button>
          <button disabled={isButtonDisabled} type="submit">
            {currentSignFormTitle}
          </button>
        </S.Button>
      </form>
      <div>
        <S.InfoMsg>
          <p>{changeFormMessage}</p>
          <button type="button" onClick={handleChangeFormStatus}>
            {nextSignFormTitle}
          </button>
        </S.InfoMsg>
      </div>
    </S.Main>
  );
}
