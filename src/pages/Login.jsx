import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../components/Context/context";



export const LoginPage = () => {
    const [userEmail, setUserEmail] = useState("");
    const [UserSenha, setUserSenha] = useState("");
    const { Login } = useContext(Context);
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const sucess = await Login(userEmail, UserSenha)
        
        if(sucess){
          navigate("/")
        }else{
          alert("usuario ou senha invalido")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        name="usuario"
        placeholder="Usuario"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={UserSenha}
        onChange={(e) => setUserSenha(e.target.value)}
      />
      {/* <button type="button">👁️</button> */}
      <button type="submit">Entrar</button>
    </form>
  );
};
