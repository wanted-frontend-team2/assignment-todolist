import { useNavigate } from 'react-router-dom';

import { ACCESS_TOKEN_KEY } from 'src/services/request';

const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate('/');
  };

  return { logout };
};

export default useLogout;
