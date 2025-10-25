import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import FoodItems from './pages/FoodItems';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/fooditems/:category" element={<FoodItems />} />

    </Routes>
  );
};

export default App;
