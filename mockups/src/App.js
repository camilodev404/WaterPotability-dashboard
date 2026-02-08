import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Metricas from './pages/Metricas';
import Predicciones from './pages/Predicciones';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metricas" element={<Metricas />} />
        <Route path="/predicciones" element={<Predicciones />} />
      </Routes>
    </Router>
  );
}

export default App;