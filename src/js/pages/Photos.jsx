import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const Photos = () => {
  const [Photos, setPhotos] = useState([]);

  const { albumId } = useParams();

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));

      setPhotos(data);
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <>
      <div className="container">
        <BackButton />
        <h1>Photos</h1>
        <div className="photos">
          {Photos.map((photo) => (
            <div key={photo.id} className="photo">
              <Link to={photo.url} target="_blank">
                <img src={photo.url} alt="" className="photo-image" />
                <div className="photo-title">{photo.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
