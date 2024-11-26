/**
 * Nome do arquivo: App.jsx
 * Data de criação: 26/11/2024
 * Autor: Bruno Gomes
 * Matrícula: 01683125
 *
 * Descrição:
 * Componente principal do aplicativo. Integra a barra de busca e a tabela
 * de criptomoedas, gerenciando os dados e filtrando-os com base na entrada do usuário.
 */

import './App.css'
import React, { useState } from "react";
import useFetchCryptos from "./hooks/useFetchCryptos";
import CryptoTable from "./components/CryptoTable";
import SearchBar from "./components/SearchBar";

const App = () => {
  const { cryptos, loading } = useFetchCryptos();
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  const handleSearch = (query) => {
    const filtered = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <div className='dashboard_crypto'>
      <h1 >Dashboard de <span className='gradient'>Criptomoedas</span></h1>
      <div className='coin animate-bounce'>$</div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <CryptoTable cryptos={filteredCryptos.length ? filteredCryptos : cryptos} />
      )}
    </div>
  );
};

export default App;
