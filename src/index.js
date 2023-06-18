import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Baitaplayoutcomponent from './Components/Baitaplayoutcomponent/Header';
import Carousel from './Components/Baitaplayoutcomponent/Carousel';
import Content from './Components/Baitaplayoutcomponent/Content';
import ProductList from './Components/Baitaplayoutcomponent/ProductList';
import Footer from './Components/Baitaplayoutcomponent/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <Baitaplayoutcomponent />
  <Carousel />
  <ProductList />
  <Footer />
  </>
);
