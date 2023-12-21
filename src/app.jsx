import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Home, About, Report, Login, Signin } from './components/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="report" element={<Report />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signin" element={<Signin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;