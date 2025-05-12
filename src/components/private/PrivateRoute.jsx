import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context/context';

export function PrivateRoute({ children }) {
  const { user } = useContext(Context);

  return user ? children : <Navigate to="/login" />;
}
