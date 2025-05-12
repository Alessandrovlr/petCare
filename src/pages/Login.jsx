import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/Context/context";

export const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [UserSenha, setUserSenha] = useState("");
  const { Login } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sucess = await Login(userEmail, UserSenha);
    if (sucess) {
      navigate("/");
    } else {
      alert("Usuário ou senha inválido");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-scree px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <input
          type="text"
          name="usuario"
          placeholder="E-mail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={UserSenha}
          onChange={(e) => setUserSenha(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
