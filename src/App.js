import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao meu Portfólio</h1>
      <nav>
        <Link to="/portfolio">Ver Portfólio</Link>
        <Link to="/jogosenha">Jogar Senha</Link>
      </nav>
    </div>
  );
}

export default App;
