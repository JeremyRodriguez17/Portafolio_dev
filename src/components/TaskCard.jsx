// components/Tasks/TaskCard.jsx - VERSIÓN CORREGIDA
import React from "react";

export default function TaskCard({ task, onOpen }) {
  const isDocumentTask = task.type === "document";
  const isCodeTask = task.type === "code";
  const hasBoth = task.githubUrl && task.documentUrl;

  const getTypeBadge = () => {
    if (hasBoth)
      return {
        text: "Código + PDF",
        color:
          "bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 border-orange-500/30",
        icon: "📂",
        gradient: "from-orange-500 to-amber-500",
      };
    if (isDocumentTask)
      return {
        text: "Documento",
        color:
          "bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30",
        icon: "📄",
        gradient: "from-purple-500 to-violet-500",
      };
    if (isCodeTask)
      return {
        text: "Proyecto",
        color:
          "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
        icon: "💻",
        gradient: "from-green-500 to-emerald-500",
      };
    return {
      text: "Tarea",
      color:
        "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30",
      icon: "📝",
      gradient: "from-blue-500 to-cyan-500",
    };
  };

  const getCategoryBadge = () => {
    const categories = {
      research: {
        text: "Investigación",
        color:
          "bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 text-indigo-400 border-indigo-500/30",
        icon: "🔍",
      },
      analysis: {
        text: "Análisis",
        color:
          "bg-gradient-to-r from-pink-500/20 to-pink-600/20 text-pink-400 border-pink-500/30",
        icon: "📊",
      },
      security: {
        text: "Seguridad",
        color:
          "bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 border-red-500/30",
        icon: "🛡️",
      },
      tools: {
        text: "Herramientas",
        color:
          "bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30",
        icon: "🔧",
      },
      programming: {
        text: "Programación",
        color:
          "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/30",
        icon: "💻",
      },
      documentation: {
        text: "Documentación",
        color:
          "bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30",
        icon: "📝",
      },
    };
    return (
      categories[task.category] || {
        text: "General",
        color:
          "bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-400 border-gray-500/30",
        icon: "📁",
      }
    );
  };

  const getStatusConfig = () => {
    const statusConfig = {
      Completado: {
        color:
          "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
        icon: "✅",
      },
      "En progreso": {
        color:
          "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border-yellow-500/30",
        icon: "🔄",
      },
      Pendiente: {
        color:
          "bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-400 border-gray-500/30",
        icon: "⏳",
      },
    };
    return statusConfig[task.status] || statusConfig["Pendiente"];
  };

  const handleCardClick = (e) => {
    // Solo abrir modal si se hace clic en la tarjeta (no en el botón)
    if (!e.target.closest("button")) {
      onOpen();
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();

    if (isDocumentTask && task.documentUrl && !hasBoth) {
      // Abrir PDF directamente SOLO para documentos puros
      window.open(task.documentUrl, "_blank", "noopener,noreferrer");
    } else {
      // Para otros casos, abrir el modal normal
      onOpen();
    }
  };

  const getButtonText = () => {
    if (hasBoth) return "Ver Detalles";
    if (isDocumentTask) return "Ver Documento";
    if (isCodeTask) return "Ver Proyecto";
    return "Ver Detalles";
  };

  const getButtonIcon = () => {
    if (hasBoth) return "→";
    if (isDocumentTask) return "📄";
    if (isCodeTask) return "→";
    return "→";
  };

  const typeBadge = getTypeBadge();
  const categoryBadge = getCategoryBadge();
  const statusConfig = getStatusConfig();
  const buttonText = getButtonText();
  const buttonIcon = getButtonIcon();

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 shadow-2xl shadow-black/40 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-500 cursor-pointer h-full flex flex-col overflow-hidden"
      onClick={handleCardClick}
    >
      {/* Efecto de borde con gradiente en hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none"></div>

      {/* Header con curso y badges */}
      <div className="flex flex-col gap-3 mb-4 relative z-10">
        {/* Primera línea: Curso y Estado */}
        <div className="flex justify-between items-center">
          <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-500/30 backdrop-blur-sm truncate max-w-[140px] flex items-center gap-1">
            <span className="text-xs">🎓</span>
            <span className="truncate">{task.course}</span>
          </span>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm flex items-center gap-1 ${statusConfig.color}`}
          >
            <span className="text-xs">{statusConfig.icon}</span>
            <span>{task.status}</span>
          </span>
        </div>

        {/* Segunda línea: Tipo y Categoría */}
        <div className="flex flex-wrap gap-2">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm flex items-center gap-1 ${typeBadge.color}`}
          >
            <span className="text-xs">{typeBadge.icon}</span>
            <span className="truncate max-w-[100px]">{typeBadge.text}</span>
          </span>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm flex items-center gap-1 ${categoryBadge.color}`}
          >
            <span className="text-xs">{categoryBadge.icon}</span>
            <span>{categoryBadge.text}</span>
          </span>
        </div>
      </div>

      {/* Línea decorativa con gradiente */}
      <div
        className={`h-1 w-12 bg-gradient-to-r ${typeBadge.gradient} rounded-full mb-4 relative z-10 group-hover:w-16 transition-all duration-300`}
      ></div>

      {/* Título */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 min-h-[64px] flex items-start relative z-10">
        {task.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-grow-0 min-h-[48px] leading-relaxed relative z-10">
        {task.description}
      </p>

      {/* Tecnologías */}
      <div className="mb-4 flex-shrink-0 relative z-10">
        <div className="flex flex-wrap gap-2 max-h-[72px] overflow-y-auto custom-scrollbar">
          {task.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 px-3 py-1.5 rounded-xl text-xs border border-gray-600/50 hover:border-gray-500/70 hover:bg-gray-600/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-600/30 mt-auto relative z-10">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="text-xs">📅</span>
          <span className="truncate flex-1">{task.date}</span>
        </div>
        <button
          onClick={handleButtonClick}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 focus:outline-none group/btn"
        >
          <span className="text-sm font-medium whitespace-nowrap group-hover/btn:underline">
            {buttonText}
          </span>
          <span className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300">
            {buttonIcon}
          </span>
        </button>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
