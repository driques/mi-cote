import React from 'react';
import PhotoCarousel from './components/PhotoCarousel';
import Heart from './components/Heart';
import './App.css';
const App = () => {
  return (
    <div className='app-container'>
      <h1>Mi Carrusel de Fotos con Corazón</h1>
      <PhotoCarousel />
      <div className='heart-container'>

      <Heart />
        </div>
    </div>
  );
};

export default App;
