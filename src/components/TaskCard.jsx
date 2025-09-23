// components/TaskCard.jsx
import React from "react";

export default function TaskCard({ task, onOpen }) {
  return (
    <div
      className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
      onClick={onOpen}
    >
      {/* Header con curso y estado */}
      <div className="flex justify-between items-start mb-3">
        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium border border-blue-500/30">
          {task.course}
        </span>
        <span
          className={`px-2 py-1 rounded text-xs font-medium border ${
            task.status === "Completado"
              ? "bg-green-500/20 text-green-400 border-green-500/30"
              : task.status === "En progreso"
              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              : "bg-gray-500/20 text-gray-400 border-gray-500/30"
          }`}
        >
          {task.status}
        </span>
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
        {task.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {task.description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-1 mb-3">
        {task.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
        {task.technologies.length > 3 && (
          <span className="bg-gray-800/50 text-gray-400 px-2 py-1 rounded text-xs">
            +{task.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Footer con fecha y acción */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-700/50">
        <span className="text-gray-500 text-xs">{task.date}</span>
        <div className="flex items-center space-x-1 text-blue-400 group-hover:text-blue-300 transition-colors">
          <span className="text-xs font-medium">Ver detalles</span>
          <span className="text-sm">→</span>
        </div>
      </div>
    </div>
  );
}
