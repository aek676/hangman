import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const usePalabraAleatoria = () => {
  const { data, loading, error } = useFetch(
    "https://clientes.api.greenborn.com.ar/public-random-word"
  );
  const [word, setWord] = useState("");

  useEffect(() => {
    if (data) {
      let jsonString = JSON.stringify(data);
      let word = JSON.parse(jsonString)[0];
      setWord(word.toUpperCase());
    }
  }, [data]);

  return { word, setWord };
};
