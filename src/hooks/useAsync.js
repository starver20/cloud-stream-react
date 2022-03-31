import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAsync = (asyncFunction, dispatch, payload, check) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const callAsyncFunction = async () => {
    try {
      setLoading(true);
      await asyncFunction(payload, dispatch, navigate, check);
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return { callAsyncFunction, loading };
};

export { useAsync };
