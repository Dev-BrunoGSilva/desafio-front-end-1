/**
 * Nome do arquivo: SearchBar.jsx
 * Data de criação: 26/11/2024
 * Autor: Bruno Gomes
 * Matrícula: 01683125
 *
 * Descrição:
 * Componente que implementa o campo de busca para filtrar criptomoedas pelo
 * nome ou símbolo fornecido pelo usuário.
 */

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar criptomoeda..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
