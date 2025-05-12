import axios from "axios";

let cacheDeImagens = [];

export async function getImageAleatoria() {
  if (cacheDeImagens.length === 0) {
    const url = "https://dog.ceo/api/breed/akita/images";
    try {
      const response = await axios.get(url);
      cacheDeImagens = response.data.message;
    } catch (error) {
      console.error("Erro ao buscar imagens da Dog API:", error);
      throw error;
    }
  }

  const index = Math.floor(Math.random() * cacheDeImagens.length);
  const imagem = cacheDeImagens.splice(index, 1)[0];

  return imagem;
}
