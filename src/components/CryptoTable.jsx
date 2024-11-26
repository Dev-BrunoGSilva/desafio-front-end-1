/**
 * Nome do arquivo: CryptoTable.jsx
 * Data de criação: 26/11/2024
 * Autor: Bruno Gomes
 * Matrícula: 01683125
 *
 * Descrição:
 * Componente responsável por exibir a tabela de criptomoedas com informações
 * como nome, preço em USD e variação nas últimas 24 horas. Inclui funcionalidade
 * de ordenação por colunas ao clicar nos cabeçalhos.
 */

import React, { useState } from "react";

const CryptoTable = ({ cryptos }) => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedCryptos = [...cryptos].sort((a, b) => {
    if (sortConfig.key) {
      const valA = a[sortConfig.key];
      const valB = b[sortConfig.key];
      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    }
    return 0;
  });

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "";
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortData("name")}>
            Criptomoeda {getSortIcon("name")}
          </th>
          <th onClick={() => sortData("current_price")}>
            Preço (USD) {getSortIcon("current_price")}
          </th>
          <th onClick={() => sortData("price_change_percentage_24h")}>
            Variação 24h (%) {getSortIcon("price_change_percentage_24h")}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedCryptos.map((crypto) => (
          <tr key={crypto.id}>
            <td>
              <img src={crypto.image} alt={crypto.name} width="20" />
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </td>
            <td>${crypto.current_price.toFixed(2)}</td>
            <td
              style={{
                color: crypto.price_change_percentage_24h > 0 ? "green" : "red",
              }}
            >
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
