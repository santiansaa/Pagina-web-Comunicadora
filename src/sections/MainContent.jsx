import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function MainContent({ activeCategory }) {
  
  // Lógica de filtrado dinámico
  const filteredProjects = activeCategory === 'all' || activeCategory === 'sobre-mi'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="w-full lg:pl-80 min-h-screen flex flex-col">
      <div className="max-w-6xl w-full mx-auto px-6 py-12 lg:p-16 flex-1 flex flex-col justify-between">
        
        {/* Encabezado Editorial */}
        <header className="mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-2">
            Portfolio Seleccionado
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-950 font-normal leading-tight max-w-3xl">
            Creadora de contenido y comunicadora digital: Comunico historias, marcas y experiencias a través del contenido audiovisual 
          </h2>
        </header>

        {/* Renderizado Condicional: Sección 'Sobre Mí' o Grilla de Proyectos */}
        {activeCategory === 'sobre-mi' ? (
          <section className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 max-w-3xl transition-all duration-300">
            <h3 className="font-serif text-2xl text-gray-900 mb-4">Detrás de la cámara</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Soy una apasionada de la comunicación visual enfocada en conectar marcas con audiencias reales. A través de la fotografía, la edición rítmica de video y la estrategia UGC, busco capturar la esencia más humana de cada proyecto.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabajo de forma independiente, fusionando estética minimalista con dinamismo para redes sociales. Si buscás transformar la identidad de tu marca, estás en el lugar correcto.
            </p>
          </section>
        ) : (
          /* Grilla Dinámica: 1 col en Mobile, 2 cols en Desktop (Lg) */
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        )}

        {/* Footer Minimalista */}
        <footer className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Sofia Siegman. Todos los derechos reservados.</p>
          <p className="italic">Diseño Minimalista & Cercano</p>
        </footer>
      </div>
    </main>
  );
}