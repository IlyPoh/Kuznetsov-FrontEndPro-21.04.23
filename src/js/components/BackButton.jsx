import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = (props) => {
  const { link } = props;
  const navigation = useNavigate();

  const handleGoBack = () => {
    if (link) {
      navigation(link);
    } else {
      navigation(-1);
    }
  };

  return (
    <>
      <button onClick={handleGoBack} className="btn btn-medium btn-back">
        Back
      </button>
    </>
  );
};
