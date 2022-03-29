import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAsync = (asyncFunction, check, dispatch, payload, navigateTo = '') => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const callAsyncFunction = async () => {
    try {
      setLoading(true);
      await asyncFunction(
        payload,
        check,
        dispatch,
        navigate,
        setLoading,
        navigateTo
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
