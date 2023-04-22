import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="" width="256" height="256" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
