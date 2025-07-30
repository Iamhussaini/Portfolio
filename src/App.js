
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyCv from './Pages/MyCv/MyCv';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycv" element={<MyCv />} />
      </Routes>
    </Router>
  );
}

export default App;
