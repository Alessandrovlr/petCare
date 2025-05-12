import { useContext, useEffect, useState } from 'react';
import { getPetsComImagem } from '../services/getPets';
import { Context } from '../components/Context/context';

export function Home() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context)

  const users = user

  useEffect(() => {
    async function carregarPets() {
      const petsComImagem = await getPetsComImagem();
      setPets(petsComImagem);
      setLoading(false);
    }

    carregarPets();
  }, []);

  return (
    <div className="p-6">
        <h1>Bem-vindo(a), {user?.user?.name || 'Visitante'}</h1>
      {loading ? (
        <p className="text-center">Carregando</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pets.map((pet, index) => (
            <div
              key={pet.id || index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={pet.imagem}
                alt={`Cachorro ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{pet.nome}</h3>
                <p className="text-sm text-gray-600">Raça: {pet.raca}</p>
                <p className="text-sm text-gray-600">Idade: {pet.idade}</p>
                <p className="text-sm text-gray-600">Dono: {pet.dono}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
