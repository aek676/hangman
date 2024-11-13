import { useState, useEffect, useCallback } from "react";
import { useFetch } from "./useFetch";

export const usePalabraAleatoria = () => {
  const [fetchUrl, setFetchUrl] = useState(
    "https://clientes.api.greenborn.com.ar/public-random-word"
  );
  const { data, loading, error } = useFetch(fetchUrl);
  const [word, setWord] = useState("");

  // Cada vez que cambia la URL (indicador de nueva solicitud), useFetch se ejecutará
  useEffect(() => {
    if (data) {
      let jsonString = JSON.stringify(data);
      let word = JSON.parse(jsonString)[0];
      setWord(word.toUpperCase());
    }
  }, [data]);

  // Función para obtener una nueva palabra
  const obtenerNuevaPalabra = useCallback(() => {
    setFetchUrl(
      `https://clientes.api.greenborn.com.ar/public-random-word?timestamp=${new Date().getTime()}`
    );
  }, []);

  return { word, loading, error, obtenerNuevaPalabra };
};
