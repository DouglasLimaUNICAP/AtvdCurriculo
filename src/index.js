import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Portfolio from './pages/Portfolio';
import JogoSenha from './pages/JogoSenha';
import './styles/global.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/jogosenha" element={<JogoSenha />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
