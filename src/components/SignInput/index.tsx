import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

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
      <label htmlFor={id}>
        <h1>{title}</h1>
        <input
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
        {isValid && <BsCheckCircleFill size={20} />}
        {focused && !isValid && value.length !== 0 && (
          <span>{errorMessage}</span>
        )}
      </label>
    </div>
  );
}
