import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_TEXTS as FT } from '../helpers/data';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">{FT.copyright}</div>
      </div>
    </footer>
  );
};
