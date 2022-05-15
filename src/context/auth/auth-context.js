import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '../videos/videos-context';

const authContext = createContext({
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  user: {},
});

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => useContext(authContext);

const useProvideAuth = () => {
  const navigate = useNavigate();
  const { videosDispatch } = useVideos();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );

  const login = async (body, rememberMe) => {
    let response = await axios.post('/api/auth/login', body);

    if (response.status === 200) {
      if (rememberMe) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            user: response.data.foundUser,
            jwt: response.data.encodedToken,
          })
        );
      }
      setUser({
        user: response.data.foundUser,
        jwt: response.data.encodedToken,
      });
    }
    return { status: response.status, user: response.data.foundUser };
  };

  const signup = async (body) => {
    let response = await axios.post('/api/auth/signup', body);
    if (response.status === 201) {
      localStorage.setItem('user', JSON.stringify(response.data.foundUser));
      setUser(response.data.createdUser);
    }
    return { status: response.status };
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    videosDispatch({ type: 'RESET_DATA' });
    navigate('/');
  };

  return { login, signup, user, logout };
};

export { AuthProvider, useAuth };
