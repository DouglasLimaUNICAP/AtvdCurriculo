import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css'; 



function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/seu-usuario/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div>
      {/* Botão para voltar ao topo */}
      <button className="back-to-top">Douglas Guilherme</button>

      <div className="portfolio-content">
        <h1>Meu Portfólio</h1>
        <p>
          Sou um desenvolvedor apaixonado por tecnologia e criação de soluções inovadoras. Comecei a minha jornada com HTML e CSS e, com o tempo, fui aprendendo outras linguagens e ferramentas como JavaScript, React e Node.js. Atualmente, estou focado em criar experiências ricas para o usuário com interfaces responsivas e acessíveis. Estou sempre em busca de novos desafios para melhorar minhas habilidades e colaborar com outras pessoas.
        </p>
        
        <h2>Meus Repositórios</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
