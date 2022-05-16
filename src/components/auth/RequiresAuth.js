import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequiresAuth;

// replace: Removes the /login from history so after logging in
// if i go back i dont go to login.
