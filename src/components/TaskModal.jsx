// components/Tasks/TaskModal.jsx
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
        color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        icon: "🔍",
      },
      analysis: {
        text: "Análisis",
        color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        icon: "📊",
      },
      security: {
        text: "Seguridad",
        color: "bg-red-500/20 text-red-400 border-red-500/30",
        icon: "🛡️",
      },
      tools: {
        text: "Herramientas",
        color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        icon: "🔧",
      },
      programming: {
        text: "Programación",
        color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        icon: "💻",
      },
      documentation: {
        text: "Documentación",
        color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        icon: "📝",
      },
    };
    return categories[task.category] || categories.documentation;
  };

  const documentInfo = getDocumentInfo();
  const categoryInfo = getCategoryInfo();

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
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
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
                {/* Badge de categoría */}
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${categoryInfo.color} flex items-center gap-1`}
                >
                  <span>{categoryInfo.icon}</span>
                  {categoryInfo.text}
                </span>
                {/* Badge de tipo */}
                {hasBoth && (
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30 flex items-center gap-1">
                    📂 Código + Documento
                  </span>
                )}
                {isDocumentTask && !hasBoth && (
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30 flex items-center gap-1">
                    📄 Documento
                  </span>
                )}
                {isCodeTask && !hasBoth && (
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30 flex items-center gap-1">
                    💻 Proyecto de Código
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl transition-colors ml-4 flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Descripción */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-300 mb-3 text-lg flex items-center gap-2">
              <span>📋</span> Descripción
            </h4>
            <p className="text-gray-400 whitespace-pre-line leading-relaxed">
              {task.details}
            </p>
          </div>

          {/* Información Académica y Tecnologías */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <span>📊</span> Información Académica
              </h4>
              <div className="space-y-3 bg-gray-800/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Fecha de entrega:</span>
                  <span className="text-white font-medium">{task.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Estado:</span>
                  <span
                    className={
                      task.status === "Completado"
                        ? "text-green-400 font-medium"
                        : "text-yellow-400 font-medium"
                    }
                  >
                    {task.status}
                  </span>
                </div>
                {task.profesor && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Profesor:</span>
                    <span className="text-white font-medium">
                      {task.profesor}
                    </span>
                  </div>
                )}
                {task.universidad && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Universidad:</span>
                    <span className="text-white font-medium">
                      {task.universidad}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <span>🛠️</span>{" "}
                {isDocumentTask
                  ? "Herramientas y Tecnologías"
                  : "Tecnologías Utilizadas"}
              </h4>
              <div className="flex flex-wrap gap-2 bg-gray-800/30 rounded-lg p-4">
                {task.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-lg text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-300 mb-4 text-lg flex items-center gap-2">
              <span>🔗</span> Enlaces del Proyecto
            </h4>
            <div className="space-y-4">
              {/* GitHub */}
              {task.githubUrl && (
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <span className="text-gray-300 text-sm flex items-center gap-2 font-medium">
                    <span className="text-blue-400">💻</span> Repositorio
                    GitHub:
                  </span>
                  <a
                    href={task.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 break-all block mt-1 text-sm"
                  >
                    {task.githubUrl}
                  </a>
                </div>
              )}

              {/* Documento */}
              {task.documentUrl && (
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <span className="text-gray-300 text-sm flex items-center gap-2 font-medium">
                    <span className="text-purple-400">
                      {documentInfo?.icon || "📄"}
                    </span>
                    {documentInfo?.label || "Documento"}:
                  </span>
                  <a
                    href={task.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 break-all block mt-1 text-sm"
                  >
                    {task.documentUrl.split("/").pop()}
                  </a>
                  <p className="text-gray-500 text-xs mt-1">
                    {task.documentType === "pdf"
                      ? "Abre en nueva pestaña"
                      : "Se descargará el documento"}
                  </p>
                </div>
              )}

              {/* Demo */}
              {task.demoUrl && (
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <span className="text-gray-300 text-sm flex items-center gap-2 font-medium">
                    <span className="text-green-400">🌐</span> Demo en Vivo:
                  </span>
                  <a
                    href={task.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 break-all block mt-1 text-sm"
                  >
                    {task.demoUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer con Botones */}
        <div className="border-t border-gray-700 p-6 bg-gray-800/50">
          <div className="flex justify-end gap-4 flex-wrap">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Cerrar
            </button>

            {/* Botón Documento */}
            {task.documentUrl && (
              <a
                href={task.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2 font-medium"
              >
                <span>{documentInfo?.icon || "📄"}</span>
                <span>Ver {documentInfo?.label || "Documento"}</span>
              </a>
            )}

            {/* Botón GitHub */}
            {task.githubUrl && (
              <a
                href={task.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 font-medium"
              >
                <span>📂</span>
                <span>Ver en GitHub</span>
              </a>
            )}

            {/* Botón Demo */}
            {task.demoUrl && (
              <a
                href={task.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 font-medium"
              >
                <span>🌐</span>
                <span>Ver Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
