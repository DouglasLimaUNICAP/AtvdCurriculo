import React, { useState, useEffect } from 'react';

function JogoSenha() {
  const [combination, setCombination] = useState('');
  const [tentativas, setTentativas] = useState([]);
  const [entrada, setEntrada] = useState('');

  // Função para gerar uma combinação aleatória de 4 dígitos
  function gerarCombinacao() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Combinação de 4 dígitos
  }

  // Gera a combinação ao carregar o componente
  useEffect(() => {
    const novaCombinacao = gerarCombinacao();
    setCombination(novaCombinacao);
    console.log('Combinação gerada:', novaCombinacao); // Apenas para depuração
  }, []);

  // Função para verificar a tentativa do jogador
  function verificarTentativa() {
    if (entrada.length !== 4) {
      alert('Adivinhe um número de 4 dígitos!');
      return;
    }

    const bufalos = combination.split('').filter((digit, idx) => digit === entrada[idx]).length;
    const vacas =
      combination.split('').filter((digit) => entrada.includes(digit)).length - bufalos;

    setTentativas([{ tentativa: entrada, bufalos, vacas }, ...tentativas]); // Adiciona nova tentativa
    setEntrada(''); // Limpa o campo de entrada
  }

  return (
    <div>
      <h1>Jogo Senha</h1>
      <input
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        maxLength={4}
        placeholder="Digite sua tentativa"
      />
      <button onClick={verificarTentativa}>Adivinhar</button>
      <button onClick={() => alert(`A combinação é: ${combination}`)}>
        Mostrar Combinação
      </button>

      <ul>
        {tentativas.map((tentativa, index) => (
          <li key={index}>
            {tentativa.tentativa} - Búfalos: {tentativa.bufalos}, Vacas: {tentativa.vacas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JogoSenha;
