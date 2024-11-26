/**
 * Nome do arquivo: CryptoTable.jsx
 * Data de criação: 26/11/2024
 * Autor: Bruno Gomes
 * Matrícula: 01683125
 *
 * Descrição:
 * Componente responsável por exibir a tabela de criptomoedas com informações
 * como nome, preço em USD e variação nas últimas 24 horas.
 */

import React from "react";

const CryptoTable = ({ cryptos }) => (
  <table>
    <thead>
      <tr>
        <th>Criptomoeda</th>
        <th>Preço (USD)</th>
        <th>Variação 24h (%)</th>
      </tr>
    </thead>
    <tbody>
      {cryptos.map((crypto) => (
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

export default CryptoTable;
