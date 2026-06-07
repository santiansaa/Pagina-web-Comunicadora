import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Contenedor del Video Iframe Responsivo (Aspect Ratio 16:9) */}
      <div className="relative w-full aspect-video bg-gray-900">
        <iframe
          src={project.videoUrl}
          title={project.title}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Información del Proyecto */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl text-gray-900 font-medium mb-2 group-hover:text-pink-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[11px] font-medium tracking-wide bg-gray-50 text-gray-500 px-2.5 py-1 rounded-md border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}