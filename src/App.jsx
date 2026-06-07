import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './sections/MainContent';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Menú Lateral Izquierdo */}
      <Sidebar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      
      {/* Contenedor de Contenido Derecho */}
      <MainContent 
        activeCategory={activeCategory} 
      />
    </div>
  );
}