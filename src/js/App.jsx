import React from 'react';
import { Layout } from './pages/Layout';
import { Routes, Route } from 'react-router-dom';
import { Albums, Home, NotFound, Photos, Users } from './pages';

import '../style/app.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId/albums" element={<Albums />} />
          <Route
            path="users/:userId/albums/:albumId/photos"
            element={<Photos />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
