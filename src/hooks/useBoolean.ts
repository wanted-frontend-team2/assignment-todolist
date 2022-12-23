import { useState } from 'react';

const useBoolean = (initialBoolean = false) => {
  const [isBoolean, setIsBoolean] = useState(initialBoolean);
  const setTrue = () => setIsBoolean(true);
  const setFalse = () => setIsBoolean(false);
  const toggle = () => setIsBoolean(pre => !pre);

  return { isBoolean, setIsBoolean, setTrue, setFalse, toggle };
};

export default useBoolean;
