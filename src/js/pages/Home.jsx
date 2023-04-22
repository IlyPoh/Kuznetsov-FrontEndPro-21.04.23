import React from 'react';
import { HOMEPAGE_TEXTS as HT } from '../helpers/data';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="homepage-title">
          <h1>{HT.title}</h1>
          <div className="homepage-buttons">
            <Link to="/users" className="btn homepage-link">
              Users
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
