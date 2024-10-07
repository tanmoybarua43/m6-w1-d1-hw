import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import InventoryList from './components/InventoryList';
import InventoryEdit from './components/InventoryEdit';

function App() {
    return (
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/inventory/:id" element={<InventoryEdit />} />
      </Routes>
  </Router>
    );
}

export default App;
