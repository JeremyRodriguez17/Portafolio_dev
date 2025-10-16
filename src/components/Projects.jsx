// components/Projects.jsx - VERSIÓN RESPONSIVE
import React, { useState } from "react";
import projects from "../data/projects.js";
import ProjectsModal from "./ProjectsModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = () => {
    setSelectedProject(projects[0]);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setSelectedProject(projects[0]);
  };

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto my-12 md:my-20 px-4 sm:px-6 py-8 animate-fade-in"
    >
      {/* Header Mejorado - Responsive */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-2 h-8 md:h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Proyecto Final
          </h2>
          <div className="w-2 h-8 md:h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
          Proyecto académico de{" "}
          <span className="text-blue-400 font-semibold">
            aseguramiento de calidad
          </span>{" "}
          para la aplicación Buggy Cars. Incluye plan de pruebas, ejecución y
          reporte de bugs.
        </p>
      </div>

      {/* Tarjeta Única del Proyecto - Responsive */}
      <div className="flex justify-center">
        <div
          className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl md:shadow-2xl shadow-black/40 hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer w-full max-w-4xl overflow-hidden"
          onClick={handleCardClick}
        >
          {/* Efecto de fondo con gradiente en hover */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>

          {/* Header con Badge de Estado - Responsive */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 md:mb-8 relative z-10">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium border border-green-500/30 backdrop-blur-sm flex items-center gap-1">
                <span className="text-xs">🚀</span>
                {projects[0].estado}
              </span>
              <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-500/30 backdrop-blur-sm flex items-center gap-1">
                <span className="text-xs">🎓</span>
                Universidad
              </span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 text-blue-400/80 self-end sm:self-auto">
              🎯
            </div>
          </div>

          {/* Línea decorativa */}
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 md:mb-6 relative z-10 group-hover:w-16 transition-all duration-300"></div>

          {/* Contenido Principal - Responsive */}
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
              {projects[0].titulo}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
              {projects[0].descripcion}
            </p>

            {/* Información Adicional - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-6">
              <div className="bg-gray-800/30 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-600/20 backdrop-blur-sm hover:border-gray-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm md:text-lg">📅</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-gray-400 text-xs block">Entrega</span>
                    <span className="text-white font-semibold text-sm md:text-base truncate">
                      {projects[0].fechaEstimada}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-600/20 backdrop-blur-sm hover:border-gray-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm md:text-lg">
                      🌐
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-gray-400 text-xs block">
                      Aplicación
                    </span>
                    <span className="text-white font-semibold text-sm md:text-base truncate">
                      Buggy Cars
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tecnologías Destacadas - Responsive */}
            <div className="mb-4 md:mb-6">
              <h4 className="text-gray-400 text-xs md:text-sm font-semibold mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
                <span>🛠️</span>
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[0].tecnologias.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl text-xs border border-gray-600/50 hover:border-gray-500/70 transition-all duration-300 backdrop-blur-sm flex-shrink-0"
                  >
                    {tech}
                  </span>
                ))}
                {projects[0].tecnologias.length > 3 && (
                  <span className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl text-xs border border-purple-500/30 backdrop-blur-sm">
                    +{projects[0].tecnologias.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Botón de Acción - Responsive */}
            <button
              onClick={handleButtonClick}
              className="w-full group/btn relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 backdrop-blur-sm overflow-hidden"
            >
              {/* Efecto de brillo en el botón */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>

              <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                <span className="group-hover/btn:scale-110 transition-transform duration-300">
                  📋
                </span>
                Ver Detalles
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Información adicional - Responsive */}
      <div className="max-w-4xl mx-auto mt-6 md:mt-8 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 text-gray-400 text-xs md:text-sm justify-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Proyecto académico</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Universidad Mariano Gálvez</span>
          </div>
        </div>
      </div>

      <ProjectsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
