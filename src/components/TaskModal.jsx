// components/TaskModal.jsx - CÓDIGO COMPLETO
import React from "react";

export default function TaskModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-700 p-6 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {task.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  {task.course}
                </span>
                <span className="bg-gray-600/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-500/30">
                  {task.semester}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${
                    task.status === "Completado"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  }`}
                >
                  {task.status}
                </span>
                {task.complejidad && (
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                    {task.complejidad}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Descripción */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-300 mb-2 text-lg">
              📋 Descripción:
            </h4>
            <p className="text-gray-400 whitespace-pre-line">{task.details}</p>
          </div>

          {/* Información Académica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-300 mb-3">
                📊 Información Académica
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Fecha de entrega:</span>
                  <span className="text-white">{task.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estado:</span>
                  <span
                    className={
                      task.status === "Completado"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }
                  >
                    {task.status}
                  </span>
                </div>
                {task.profesor && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Profesor:</span>
                    <span className="text-white">{task.profesor}</span>
                  </div>
                )}
                {task.universidad && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Universidad:</span>
                    <span className="text-white">{task.universidad}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tecnologías */}
            <div>
              <h4 className="font-semibold text-gray-300 mb-3">
                🛠️ Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {task.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Objetivos (si existen) */}
          {task.objetivos && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-300 mb-3">
                🎯 Objetivos de Aprendizaje
              </h4>
              <ul className="text-gray-400 space-y-2">
                {task.objetivos.map((objetivo, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {objetivo}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Repositorio y Demo */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-300 mb-3">
              🔗 Enlaces del Proyecto
            </h4>
            <div className="space-y-2">
              <div>
                <span className="text-gray-400 text-sm">
                  Repositorio GitHub:
                </span>
                <a
                  href={task.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 break-all block mt-1"
                >
                  {task.githubUrl}
                </a>
              </div>
              {task.demoUrl && (
                <div>
                  <span className="text-gray-400 text-sm">Demo en Vivo:</span>
                  <a
                    href={task.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 break-all block mt-1"
                  >
                    {task.demoUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-6">
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={task.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span>📂 Ver en GitHub</span>
            </a>
            {task.demoUrl && (
              <a
                href={task.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <span>🌐 Ver Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
