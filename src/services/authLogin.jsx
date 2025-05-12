import axios from "axios";

const API_URL = "https://68223661b342dce8004d83f4.mockapi.io/users";

export const LoginRequenst = async (email, senha) => {
    
  try {

    const response = await axios.get(API_URL);
    const users = response.data;

    const user = users.find((user) => user.email === email && user.senha === senha);
    return user ? { sucess: true, user } : { sucess: false };

  } catch (error) {
    console.log("Erro de autenticação", error);
    return { sucess: false };
  }
};
