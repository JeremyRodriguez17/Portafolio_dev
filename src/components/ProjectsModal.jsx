// components/ProjectsModal.jsx - INFORMACIÓN COMPLETA
import React from "react";

export default function ProjectsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-700 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {project.titulo}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-500/30">
                  {project.estado}
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  🎓 Proyecto Final
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  ⏳ Diciembre 2024
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl transition-colors duration-300 bg-gray-700/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-600"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Descripción Detallada */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📖 Descripción del Proyecto
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {project.detalles}
              </p>

              {/* Objetivos Específicos */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">
                  🎯 Objetivos Principales
                </h5>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Demostrar las habilidades técnicas adquiridas durante el
                    semestre
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Implementar una solución integral a un problema real
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Desarrollar documentación técnica profesional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Presentar y defender el trabajo ante un panel académico
                  </li>
                </ul>
              </div>
            </div>

            {/* Detalles Técnicos */}
            <div className="space-y-6">
              {/* Información del Proyecto */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  ⚙️ Información del Proyecto
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Estado actual:</span>
                    <span className="text-yellow-400 font-semibold">
                      {project.estado}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Fecha de entrega:</span>
                    <span className="text-white font-semibold">
                      {project.fechaEstimada}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Semestre:</span>
                    <span className="text-white font-semibold">
                      10mo Semestre
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Universidad:</span>
                    <span className="text-white font-semibold">
                      Mariano Gálvez
                    </span>
                  </div>
                </div>
              </div>

              {/* Tecnologías Previstas */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  🛠️ Tecnologías Previstas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-200 px-3 py-2 rounded-lg text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fases del Proyecto */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  📊 Fases de Desarrollo
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      fase: "Investigación y Planificación",
                      estado: "Completado",
                      porcentaje: 100,
                    },
                    {
                      fase: "Diseño de Arquitectura",
                      estado: "En progreso",
                      porcentaje: 60,
                    },
                    {
                      fase: "Desarrollo Frontend",
                      estado: "Pendiente",
                      porcentaje: 0,
                    },
                    {
                      fase: "Desarrollo Backend",
                      estado: "Pendiente",
                      porcentaje: 0,
                    },
                    {
                      fase: "Testing y Deployment",
                      estado: "Pendiente",
                      porcentaje: 0,
                    },
                  ].map((fase, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300 text-sm">{fase.fase}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          fase.estado === "Completado"
                            ? "bg-green-500/20 text-green-400"
                            : fase.estado === "En progreso"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {fase.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recursos Adicionales */}
          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-3">
              📚 Recursos y Documentación
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400 block mb-1">
                  Documentación técnica:
                </span>
                <span className="text-blue-400">Disponible en GitHub</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">
                  Repositorio del proyecto:
                </span>
                <span className="text-blue-400">Próximamente en GitHub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con Acciones */}
        <div className="border-t border-gray-700 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <span>Última actualización: Noviembre 2024</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Cerrar
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <span>📁 Ver en GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
