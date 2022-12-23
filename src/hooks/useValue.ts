import { ChangeEvent, useState } from 'react';

const useValue = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const reset = () => setValue(initialValue);

  return { value, setValue, onChange, reset };
};

export default useValue;
