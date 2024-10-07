// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, RootLayout } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
