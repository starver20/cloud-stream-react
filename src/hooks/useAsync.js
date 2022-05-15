import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth/auth-context';

const useAsync = (asyncFunction, dispatch, payload, check) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const authState = useAuth();

  const callAsyncFunction = async () => {
    try {
      setLoading(true);
      await asyncFunction(
        dispatch,
        navigate,
        payload,
        authState?.user?.jwt,
        check
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return { callAsyncFunction, loading };
};

export { useAsync };
