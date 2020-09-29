import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import CoffeeTables from './components/CoffeeTables';
import FurnitureProducts from './components/FurnitureProducts';
import Sale from './components/Sale';
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <CoffeeTables />
      <FurnitureProducts />
      <Sale />
    </>
  );
}

export default App;
