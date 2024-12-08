
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Landingpage from './Landingpage.jsx'
import AboutUs from './AboutUs.jsx'
import Menu from './Menu.jsx'
import FoodDetails from './FoodDetails.jsx'

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<FoodDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;

