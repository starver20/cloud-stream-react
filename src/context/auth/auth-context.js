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

  const [user, setUser] = useState(null);

  const login = async (body) => {
    let response = await axios.post('/api/auth/login', body);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem('jwt', response.data.encodedToken);
      localStorage.setItem('user', JSON.stringify(response.data.foundUser));
      setUser(response.data.foundUser);
    }
    return { status: response.status, user: response.data.foundUser };
  };

  const signup = async (body) => {
    let response = await axios.post('/api/auth/signup', body);
    if (response.status === 201) {
      localStorage.setItem('jwt', response.data.encodedToken);
      localStorage.setItem('user', JSON.stringify(response.data.foundUser));
      setUser(response.data.createdUser);
    }
    return { status: response.status };
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setUser(null);
    videosDispatch({ type: 'RESET_DATA' });
    navigate('/');
  };

  return { login, signup, user, logout };
};

export { AuthProvider, useAuth };
