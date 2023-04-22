import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const Albums = () => {
  const [Albums, setAlbums] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    async function fetchAlbums() {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error));

      setAlbums(data);
    }

    fetchAlbums();
  }, [userId]);

  return (
    <>
      <div className="container">
        <BackButton link="/users" />
        <h1>Albums</h1>
        <div className="albums">
          {Albums.map((album) => (
            <div key={album.id} className="album">
              <div className="album-title">
                {album.id}. {album.title}
              </div>
              <Link
                to={`${album.id}/photos`}
                className="btn btn-small album-button"
              >
                Photos
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
