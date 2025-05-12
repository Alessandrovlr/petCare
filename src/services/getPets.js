import axios from 'axios';
import { getImageAleatoria } from './apiDog';

const PETS_API_URL = 'https://681b999717018fe5057c2712.mockapi.io/pets';

export async function getPetsComImagem() {
  try {
    const response = await axios.get(PETS_API_URL);
    const pets = response.data;

    const petsComImagem = await Promise.all(
      pets.map(async (pet) => {
        const imagem = await getImageAleatoria();
        return {
          id: pet.id,
          nome: pet.name,
          raca: pet.breed,
          idade: pet.age,
          dono: pet.owner,
          imagem,
        };
      })
    );

    return petsComImagem;
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    return [];
  }
}
