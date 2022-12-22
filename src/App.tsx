import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from './pages/Auth';
import useRedirect from './hooks/useRedirect';

function App() {
  useRedirect();
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
