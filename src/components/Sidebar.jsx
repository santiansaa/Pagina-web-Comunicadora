import React from 'react';
import { clientInfo, categories } from '../data/portfolioData';

export default function Sidebar({ activeCategory, setActiveCategory }) {
  
  // Función para generar la URL de WhatsApp sanitizada
  const getWhatsAppLink = (text) => {
    return `https://wa.me/${clientInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Encontrar el texto del mensaje para la categoría activa actual
  const currentCategoryObj = categories.find(cat => cat.id === activeCategory);
  const currentMessage = currentCategoryObj ? currentCategoryObj.text : categories[0].text;

  return (
    <aside className="w-full lg:w-80 lg:fixed lg:h-screen bg-white border-b lg:border-b-0 lg:border-r border-gray-100 p-8 flex flex-col justify-between z-10">
      
      {/* Top: Perfil e Identidad */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img 
  src={clientInfo.avatar} 
  alt={clientInfo.name} 
  // Agregamos: object-cover
  className="w-24 h-24 rounded-full object-cover border-2 border-brand-pink mb-4 shadow-sm"
/>
        <h1 className="font-serif text-2xl font-semibold tracking-wide text-gray-900 mb-1">
          {clientInfo.name}
        </h1>
        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
          {clientInfo.role}
        </p>

        {/* Navegación / Filtros adaptable */}
<nav className="w-full flex flex-row flex-wrap justify-center gap-2 mt-4 lg:mt-0 lg:flex-col lg:space-y-2">
  {categories.map((cat) => (
    <button
      key={cat.id}
      onClick={() => setActiveCategory(cat.id)}
      className={`text-xs md:text-sm px-3 py-1.5 lg:px-4 lg:py-2.5 rounded-lg transition-all duration-300 font-medium whitespace-nowrap ${
        activeCategory === cat.id
          ? 'bg-brand-pink text-gray-900 font-semibold shadow-xs'
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 bg-gray-100/50 lg:bg-transparent'
      }`}
    >
      {cat.label}
    </button>
  ))}
</nav>
      </div>

      {/* Bottom: CTA Dinámico a WhatsApp */}
      <div className="mt-8 lg:mt-0 w-full">
        <a
          href={getWhatsAppLink(currentMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gray-950 text-white text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded-xl hover:bg-brand-pink-hover hover:text-gray-950 transition-all duration-300 shadow-sm"
        >
          Hablemos por WhatsApp
        </a>
        <p className="text-[10px] text-gray-400 text-center mt-2 font-light">
          Respuesta inmediata • Cotización a medida
        </p>
      </div>
    </aside>
  );
}