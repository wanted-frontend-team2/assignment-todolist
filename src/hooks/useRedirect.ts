import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirect = () => {
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token');

  useEffect(() => {
    if (isToken) navigate('/todo');
    else navigate('/');
  }, [isToken, navigate]);
};

export default useRedirect;
