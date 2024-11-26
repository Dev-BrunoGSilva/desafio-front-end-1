import './App.css'
import React from "react";
import useFetchCryptos from "./hooks/useFetchCryptos";
import CryptoTable from "./components/CryptoTable";

const App = () => {
  const { cryptos, loading } = useFetchCryptos();

  return (
    <div>
      <h1>Dashboard de Criptomoedas</h1>
      {loading ? <p>Carregando...</p> : <CryptoTable cryptos={cryptos} />}
    </div>
  );
};

export default App;
