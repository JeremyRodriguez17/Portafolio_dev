// components/Projects.jsx - CORREGIDO
import React, { useState } from "react";
import projects from "../data/projects.js";
import ProjectsModal from "./ProjectsModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = () => {
    setSelectedProject(projects[0]);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evita que el clic del botón active el clic de la tarjeta
    setSelectedProject(projects[0]);
  };

  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto my-16 p-6 animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Proyecto Final
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Espacio dedicado al proyecto final del semestre. Aquí se mostrará el
        trabajo completo una vez finalizado.
      </p>

      {/* Tarjeta Única del Proyecto */}
      <div className="flex justify-center">
        <div
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl shadow-black/40 hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer group max-w-2xl w-full"
          onClick={handleCardClick} // Solo el div principal tiene onClick
        >
          {/* Header con Badge de Estado */}
          <div className="flex justify-between items-start mb-6">
            <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/30">
              🚧 {projects[0].estado}
            </span>
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              🎓
            </div>
          </div>

          {/* Contenido Principal */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {projects[0].titulo}
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {projects[0].descripcion}
          </p>

          {/* Información Adicional */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <span className="text-gray-400 text-sm block">
                📅 Fecha estimada
              </span>
              <span className="text-white font-semibold">
                {projects[0].fechaEstimada}
              </span>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <span className="text-gray-400 text-sm block">
                🛠️ Tecnologías
              </span>
              <span className="text-white font-semibold">
                {projects[0].tecnologias.join(", ")}
              </span>
            </div>
          </div>

          {/* Botón de Acción - CON stopPropagation */}
          <button
            onClick={handleButtonClick} // Evita el conflicto con el clic del div
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Ver Detalles del Proyecto
          </button>
        </div>
      </div>

      <ProjectsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
