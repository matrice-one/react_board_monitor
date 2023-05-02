import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Board Vizualizer</a>
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/about">Blog</a>
          </li>
          <li>
            <a href="/about">Dashboard</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
