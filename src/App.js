import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';  // Menú principal
import './App.css';
import FlowerShop from './pages/FlowerShop';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />  {/* Página de registro */}
          <Route path="/login" element={<Login />} />  {/* Página de inicio de sesión */}
          <Route path="/home" element={<Home />} />  {/* Menú principal */}
          <Route path="/FlowerShop" element={<FlowerShop />} />  {/* Tienda de flores */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
