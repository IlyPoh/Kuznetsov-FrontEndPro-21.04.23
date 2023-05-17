import React from 'react';
import { BackButton } from '../components/BackButton';

export const NotFound = () => {
  return (
    <>
      <div className="container">
        <BackButton link="/" />
        <div className="error">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
    </>
  );
};
