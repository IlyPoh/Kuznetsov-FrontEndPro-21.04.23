import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .catch((error) => console.log(error));

      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        <BackButton link="/" />
        <h1>Users</h1>
        <div className="users">
          {users?.map((user) => (
            <div key={user.id} className="user">
              <div className="user-name">{user.name}</div>
              <Link
                to={`${user.id}/albums`}
                className="btn btn-small user-link"
              >
                Albums
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
