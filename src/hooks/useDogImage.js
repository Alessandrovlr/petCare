import { useEffect, useState } from 'react';
import { getImageAleatoria } from '../services/apiDog';

export function useDogImages(quantidade = 4) {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelado = false;

    async function buscarImagens() {
      const imagensUnicas = new Set();
      let tentativas = 0;

      while (imagensUnicas.size < quantidade && tentativas < 50) {
        const novaImagem = await getImageAleatoria();
        imagensUnicas.add(novaImagem);
        tentativas++;
      }

      if (!cancelado) {
        setImagens(Array.from(imagensUnicas));
        setLoading(false);
      }
    }

    buscarImagens();

    return () => {
      cancelado = true;
    };
  }, [quantidade]);

  return { imagens, loading };
}
