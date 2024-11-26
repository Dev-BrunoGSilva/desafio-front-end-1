/**
 * Nome do arquivo: useFetchCryptos.js
 * Data de criação: 26/11/2024
 * Autor: Bruno Gomes
 * Matrícula: 01683125
 *
 * Descrição:
 * Hook personalizado para buscar dados de criptomoedas usando a API CoinGecko.
 * Retorna os dados das criptomoedas e o estado de carregamento.
 */

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cryptos, loading };
};

export default useFetchCryptos;
