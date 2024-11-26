/**
 * Nome do arquivo: useFetchCryptos.js
 * Data de criação: 26/11/2024
 * Autor: Bruno Gomes
 * Matrícula: 01683125
 *
 * Descrição:
 * Hook personalizado para buscar dados de criptomoedas usando a API CoinGecko.
 * Inclui gerenciamento de estados de carregamento e tratamento de erros.
 */

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptos(data);
      } catch (err) {
        setError("Erro ao carregar os dados. Tente novamente.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cryptos, loading, error };
};

export default useFetchCryptos;
