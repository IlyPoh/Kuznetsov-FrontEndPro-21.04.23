import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';

export const Header = () => {
  function getNavLinkClassName({ isActive, isPending }) {
    return isPending ? 'pending' : isActive ? 'active' : '';
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="header logo" width="256" height="256" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <NavLink to="/" className={getNavLinkClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={getNavLinkClassName}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
