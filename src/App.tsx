import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from './pages/Auth';
import useRedirect from './hooks/useRedirect';
import Todo from './pages/Todo';

function App() {
  useRedirect();
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
