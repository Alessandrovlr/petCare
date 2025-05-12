import { createContext, useState } from 'react';
import { LoginRequenst } from '../../services/authLogin';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Login = async (userEmail, userSenha) => {
    const { sucess, user } = await LoginRequenst(userEmail, userSenha);
    setUser(sucess ? user : null);
    return sucess;
  };

  const Logout = () => setUser(null);

  return (
    <Context.Provider value={{ user, Login, Logout }}>
      {children}
    </Context.Provider>
  );
};