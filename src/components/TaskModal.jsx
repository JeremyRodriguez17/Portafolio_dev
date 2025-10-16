// components/Tasks/TaskModal.jsx - COMPLETO CORREGIDO
import React from "react";

export default function TaskModal({ task, onClose }) {
  if (!task) return null;

  const isDocumentTask = task.type === "document";
  const isCodeTask = task.type === "code";
  const hasBoth = task.githubUrl && task.documentUrl;

  const getDocumentInfo = () => {
    if (!task.documentUrl) return null;

    const type = task.documentType || "document";
    const icons = {
      pdf: "📕",
      docx: "📘",
      pptx: "📙",
      excel: "📗",
      default: "📄",
    };

    const labels = {
      pdf: "PDF",
      docx: "Word",
      pptx: "PowerPoint",
      excel: "Excel",
      default: "Documento",
    };

    return {
      icon: icons[type] || icons.default,
      label: labels[type] || labels.default,
    };
  };

  const getCategoryInfo = () => {
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
    return categories[task.category] || categories.documentation;
  };

  const documentInfo = getDocumentInfo();
  const categoryInfo = getCategoryInfo();

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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {task.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm">
                  {task.course}
                </span>
                <span className="bg-gradient-to-r from-gray-600/50 to-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-500/30 backdrop-blur-sm">
                  {task.semester}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-sm border backdrop-blur-sm ${
                    task.status === "Completado"
                      ? "bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border-green-500/30"
                      : "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border-yellow-500/30"
                  }`}
                >
                  {task.status}
                </span>
                {task.complejidad && (
                  <span className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm">
                    {task.complejidad}
                  </span>
                )}
                {/* Badge de categoría */}
                <span
                  className={`px-4 py-2 rounded-full text-sm border ${categoryInfo.color} backdrop-blur-sm flex items-center gap-2`}
                >
                  <span>{categoryInfo.icon}</span>
                  {categoryInfo.text}
                </span>
                {/* Badge de tipo */}
                {hasBoth && (
                  <span className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm border border-orange-500/30 backdrop-blur-sm flex items-center gap-2">
                    📂 Código + Documento
                  </span>
                )}
                {isDocumentTask && !hasBoth && (
                  <span className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm flex items-center gap-2">
                    📄 Documento
                  </span>
                )}
                {isCodeTask && !hasBoth && (
                  <span className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30 backdrop-blur-sm flex items-center gap-2">
                    💻 Proyecto de Código
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl transition-all duration-300 bg-gray-700/30 hover:bg-gray-600/50 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 hover:scale-110 ml-4 flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido Mejorado */}
        <div className="p-8 space-y-8">
          {/* Descripción Mejorada */}
          <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400">📋</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Descripción</h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-[15px] whitespace-pre-line">
              {task.details}
            </p>
          </div>

          {/* Información Académica y Tecnologías - Mejorado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Información Académica */}
            <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400">📊</span>
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Información Académica
                </h4>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Fecha de entrega", value: task.date, icon: "📅" },
                  {
                    label: "Estado",
                    value: task.status,
                    icon: task.status === "Completado" ? "✅" : "🔄",
                    color:
                      task.status === "Completado"
                        ? "text-green-400"
                        : "text-yellow-400",
                  },
                  ...(task.profesor
                    ? [{ label: "Profesor", value: task.profesor, icon: "👨‍🏫" }]
                    : []),
                  ...(task.universidad
                    ? [
                        {
                          label: "Universidad",
                          value: task.universidad,
                          icon: "🏛️",
                        },
                      ]
                    : []),
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-700/20 rounded-xl border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">{item.icon}</span>
                      <span className="text-gray-400 text-[15px]">
                        {item.label}:
                      </span>
                    </div>
                    <span
                      className={`${
                        item.color || "text-white"
                      } font-semibold text-[15px] group-hover:scale-105 transition-transform duration-300`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tecnologías Mejorado */}
            <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-600/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400">🛠️</span>
                </div>
                <h4 className="text-xl font-semibold text-white">
                  {isDocumentTask
                    ? "Herramientas y Tecnologías"
                    : "Tecnologías Utilizadas"}
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {task.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 px-4 py-2 rounded-xl text-sm border border-gray-600/50 hover:border-gray-500/70 hover:bg-gray-600/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enlaces Mejorados */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400">🔗</span>
              </div>
              <h4 className="text-xl font-semibold text-white">
                Enlaces del Proyecto
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* GitHub */}
              {task.githubUrl && (
                <a
                  href={task.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-400">💻</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Repositorio</div>
                      <div className="text-blue-400 group-hover:text-blue-300 font-medium transition-colors duration-300">
                        GitHub
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {/* Documento */}
              {task.documentUrl && (
                <a
                  href={task.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-purple-400">
                        {documentInfo?.icon || "📄"}
                      </span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        {documentInfo?.label || "Documento"}
                      </div>
                      <div className="text-purple-400 group-hover:text-purple-300 font-medium transition-colors duration-300">
                        {task.documentType === "pdf"
                          ? "Ver Online"
                          : "Descargar"}
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {/* Demo */}
              {task.demoUrl && (
                <a
                  href={task.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-green-400">🌐</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Demo en Vivo</div>
                      <div className="text-green-400 group-hover:text-green-300 font-medium transition-colors duration-300">
                        Ver Demo
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer Mejorado */}
        <div className="border-t border-gray-600/30 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span>
                Proyecto académico - {task.universidad || "Universidad"}
              </span>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/70 text-gray-300 rounded-xl hover:text-white transition-all duration-300 font-semibold border border-gray-600/30 hover:border-gray-500/50 backdrop-blur-sm hover:scale-105"
              >
                Cerrar
              </button>

              {/* Botones de Acción Mejorados */}
              {task.documentUrl && (
                <a
                  href={task.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold flex items-center gap-2 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <span>{documentInfo?.icon || "📄"}</span>
                  <span>Ver {documentInfo?.label || "Documento"}</span>
                </a>
              )}

              {task.githubUrl && (
                <a
                  href={task.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 font-semibold flex items-center gap-2 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  <span>📂</span>
                  <span>Ver en GitHub</span>
                </a>
              )}

              {task.demoUrl && (
                <a
                  href={task.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 font-semibold flex items-center gap-2 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  <span>🌐</span>
                  <span>Ver Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
