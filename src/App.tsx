import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from './pages/Auth';
import Error from './pages/Error';
import useRedirect from './hooks/useRedirect';

function App() {
  useRedirect();
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
