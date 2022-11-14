import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/sebastien-pansini/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/sebneedles"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-github-square"></i>
      </a>
    </div>
  );
};

export default Social;
