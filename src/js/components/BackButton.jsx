import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation(-1);
  };

  return (
    <>
      <button onClick={handleGoBack} className="btn btn-medium btn-back">
        Back
      </button>
    </>
  );
};
