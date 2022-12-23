import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import * as S from './index.style';

interface Props {
  id: string;
  name: string;
  value: string;
  errorMessage: string;
  pattern: string | undefined;
  isValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignInput(props: Props) {
  const {
    id,
    name,
    errorMessage,
    value,
    onChange,
    pattern,
    isValid,
    ...inputProps
  } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (): void => {
    setFocused(true);
  };

  const title = name.replace(/^[a-z]/, char => char.toUpperCase());

  return (
    <div>
      <S.InputBox>
        <S.Label htmlFor={id}>{title}</S.Label>
        <S.Input
          name={name}
          id={id}
          onChange={onChange}
          onBlur={handleFocus}
          onInvalid={e => {
            e.preventDefault();
          }}
          value={value}
          pattern={pattern}
          {...inputProps}
        />
      </S.InputBox>
      <S.InputState>
        {isValid && <BsCheckCircleFill size={20} />}
        {focused && !isValid && value.length !== 0 && (
          <S.ErrorMsg>{errorMessage}</S.ErrorMsg>
        )}
      </S.InputState>
    </div>
  );
}
