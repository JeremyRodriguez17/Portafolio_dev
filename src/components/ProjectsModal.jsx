// components/ProjectsModal.jsx - COMPLETO CORREGIDO
import React from "react";

export default function ProjectsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-gray-600/30 rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl shadow-black/50 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Mejorado */}
        <div className="border-b border-gray-600/30 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.titulo}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30 backdrop-blur-sm">
                  ✨ {project.estado}
                </span>
                <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm">
                  🎓 Proyecto Universitario
                </span>
                <span className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm">
                  ⏳ {project.fechaEstimada}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl transition-all duration-300 bg-gray-700/30 hover:bg-gray-600/50 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 hover:scale-110"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido Mejorado */}
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Columna Izquierda - Mejorada */}
            <div className="space-y-8">
              {/* Descripción con nuevo diseño */}
              <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">📖</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Descripción del Proyecto
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  {project.detalles}
                </p>
              </div>

              {/* Alcance de Pruebas - Mejorado */}
              <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Alcance de Pruebas
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    "Registro e inicio de sesión de usuarios",
                    "Edición de perfil y cambio de contraseña",
                    "Votación y comentarios en autos",
                    "Navegación por marcas y modelos",
                    "Manejo de errores y validaciones",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-[15px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estrategia de Pruebas - Mejorado */}
              <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400">🧪</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Estrategia de Pruebas
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Pruebas Funcionales",
                    "Pruebas Exploratorias",
                    "Cross-browser Testing",
                    "Pruebas Automatizadas",
                  ].map((estrategia, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 group"
                    >
                      <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                        {estrategia}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Derecha - Mejorada */}
            <div className="space-y-8">
              {/* Información del Proyecto - Mejorada */}
              <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">⚙️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Información del Proyecto
                  </h4>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: "Estado",
                      value: project.estado,
                      color: "text-green-400",
                    },
                    {
                      label: "Fecha de entrega",
                      value: project.fechaEstimada,
                      color: "text-white",
                    },
                    {
                      label: "Universidad",
                      value: project.universidad,
                      color: "text-white",
                    },
                    {
                      label: "Aplicación bajo prueba",
                      value: "Buggy Cars",
                      color: "text-blue-400",
                      link: project.urlAplicacion,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-700/20 rounded-xl border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300"
                    >
                      <span className="text-gray-400 text-[15px]">
                        {item.label}:
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${item.color} hover:text-blue-300 font-semibold text-[15px] transition-colors duration-300`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className={`${item.color} font-semibold text-[15px]`}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecnologías - Mejorado */}
              <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400">🛠️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Herramientas y Tecnologías
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 px-4 py-2 rounded-xl text-sm border border-gray-600/50 hover:border-gray-500/70 hover:bg-gray-600/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Entregables - Mejorado */}
              <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-400">📦</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Entregables Requeridos
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      item: "Documento formal con normas APA",
                      estado: "Pendiente",
                    },
                    {
                      item: "Plan de pruebas y matriz de casos",
                      estado: "En progreso",
                    },
                    { item: "Reporte de bugs", estado: "Pendiente" },
                    { item: "Scripts de automatización", estado: "Pendiente" },
                    { item: "Repositorio GitHub", estado: "En progreso" },
                  ].map((entregable, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-700/20 rounded-xl border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300 group"
                    >
                      <span className="text-gray-300 group-hover:text-white text-[15px] transition-colors duration-300">
                        {entregable.item}
                      </span>
                      <span
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium backdrop-blur-sm border ${
                          entregable.estado === "Completado"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : entregable.estado === "En progreso"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        } transition-all duration-300 group-hover:scale-110`}
                      >
                        {entregable.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recursos y Plantillas - Mejorado */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400">📚</span>
              </div>
              <h4 className="text-xl font-semibold text-white">
                Recursos y Plantillas Oficiales
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={project.plantillaPruebas}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-green-400">📊</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">
                      Plantilla de pruebas
                    </div>
                    <div className="text-blue-400 group-hover:text-blue-300 font-medium transition-colors duration-300">
                      Google Sheets
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={project.plantillaErrores}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-red-400">🐛</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">
                      Plantilla de errores
                    </div>
                    <div className="text-blue-400 group-hover:text-blue-300 font-medium transition-colors duration-300">
                      Google Docs
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Mejorado */}
        <div className="border-t border-gray-600/30 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span>Proyecto académico - Universidad Mariano Gálvez</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/70 text-gray-300 rounded-xl hover:text-white transition-all duration-300 font-semibold border border-gray-600/30 hover:border-gray-500/50 backdrop-blur-sm hover:scale-105"
              >
                Cerrar
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 font-semibold flex items-center gap-2 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>📁 Repositorio GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
