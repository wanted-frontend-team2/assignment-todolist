import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token');

  useEffect(() => {
    if (isToken) navigate('/todo');
    else if (!isToken && pathname === '/todo') navigate('/');
  }, [isToken, navigate]);
};

export default useRedirect;
