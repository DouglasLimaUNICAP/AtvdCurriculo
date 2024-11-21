import React, { useState } from 'react';

function JogoSenha() {
  const [combination, setCombination] = useState(generateCombination());
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState('');

  function generateCombination() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Combinação de 4 dígitos
  }

  function checkGuess() {
    if (input.length !== 4) {
      alert('Adivinhe um número de 4 dígitos!');
      return;
    }
    const bulls = combination.split('').filter((digit, idx) => digit === input[idx]).length;
    const cows = combination.split('').filter((digit) => input.includes(digit)).length - bulls;

    setGuesses([{ guess: input, bulls, cows }, ...guesses]);
    setInput('');
  }

  return (
    <div>
      <h1>Jogo Senha</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={4}
        placeholder="Digite sua tentativa"
      />
      <button onClick={checkGuess}>Adivinhar</button>
      <button onClick={() => alert(`Senha: ${combination}`)}>Mostrar Combinação</button>

      <ul>
        {guesses.map((attempt, index) => (
          <li key={index}>
            {attempt.guess} - Bulls: {attempt.bulls}, Cows: {attempt.cows}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JogoSenha;
