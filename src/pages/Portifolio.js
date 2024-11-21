import React, { useEffect, useState } from 'react';

function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/seu-usuario/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div>
      <h1>Meu Portfólio</h1>
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
  );
}

export default Portfolio;
