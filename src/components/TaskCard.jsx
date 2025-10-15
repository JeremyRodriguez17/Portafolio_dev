// components/Tasks/TaskCard.jsx
import React from "react";

export default function TaskCard({ task, onOpen }) {
  const isDocumentTask = task.type === "document";
  const isCodeTask = task.type === "code";
  const hasBoth = task.githubUrl && task.documentUrl;

  const getTypeBadge = () => {
    if (hasBoth)
      return {
        text: "Código + PDF",
        color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        icon: "📂",
      };
    if (isDocumentTask)
      return {
        text: "Documento",
        color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        icon: "📄",
      };
    if (isCodeTask)
      return {
        text: "Proyecto",
        color: "bg-green-500/20 text-green-400 border-green-500/30",
        icon: "💻",
      };
    return {
      text: "Tarea",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "📝",
    };
  };

  const getCategoryBadge = () => {
    const categories = {
      research: {
        text: "Investigación",
        color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      },
      analysis: {
        text: "Análisis",
        color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      },
      security: {
        text: "Seguridad",
        color: "bg-red-500/20 text-red-400 border-red-500/30",
      },
      tools: {
        text: "Herramientas",
        color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      },
      programming: {
        text: "Programación",
        color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      documentation: {
        text: "Documentación",
        color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      },
    };
    return (
      categories[task.category] || {
        text: "General",
        color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      }
    );
  };

  const typeBadge = getTypeBadge();
  const categoryBadge = getCategoryBadge();

  return (
    <div
      className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group h-full flex flex-col"
      onClick={onOpen}
    >
      {/* Header con curso y badges - Mejor organizado */}
      <div className="flex flex-col gap-2 mb-3">
        {/* Primera línea: Curso y Estado */}
        <div className="flex justify-between items-center">
          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium border border-blue-500/30 truncate max-w-[120px]">
            {task.course}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium border flex-shrink-0 ${
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

        {/* Segunda línea: Tipo y Categoría */}
        <div className="flex flex-wrap gap-1">
          <span
            className={`px-2 py-1 rounded text-xs font-medium border ${typeBadge.color} flex items-center gap-1 flex-shrink-0`}
          >
            <span className="text-xs">{typeBadge.icon}</span>
            <span className="truncate max-w-[80px]">{typeBadge.text}</span>
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium border ${categoryBadge.color} flex-shrink-0`}
          >
            {categoryBadge.text}
          </span>
        </div>
      </div>

      {/* Título - Con altura fija */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 min-h-[56px] flex items-start">
        {task.title}
      </h3>

      {/* Descripción - Altura fija */}
      <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-grow-0 min-h-[40px]">
        {task.description}
      </p>

      {/* Tecnologías - Scroll horizontal si es necesario */}
      <div className="mb-3 flex-shrink-0">
        <div className="flex flex-wrap gap-1 max-h-[60px] overflow-y-auto">
          {task.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer - Siempre al fondo */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-700/50 mt-auto flex-shrink-0">
        <span className="text-gray-500 text-xs truncate flex-1 mr-2">
          {task.date}
        </span>
        <div className="flex items-center space-x-1 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0">
          <span className="text-xs font-medium whitespace-nowrap">
            {isDocumentTask ? "Ver PDF" : "Ver detalles"}
          </span>
          <span className="text-sm group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
