import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
