// components/CVDownloadModal.jsx - CORREGIDO
import React, { useState } from "react";

export default function CVDownloadModal({ isOpen, onClose }) {
  const [selectedFormat, setSelectedFormat] = useState("pdf");

  if (!isOpen) return null;

  const downloadCV = (format) => {
    // NOMBRES CORREGIDOS - Sin espacios problemáticos
    const fileConfig = {
      pdf: {
        filename: "Curriculum_Vitae.pdf", // ← Cambiado
        path: "/assets/documents/Curriculum_Vitae.pdf", // ← Cambiado
      },
      txt: {
        filename: "CV_Jeremy_Rodriguez.txt", // ← También sin espacios
        path: "/assets/documents/CV_Jeremy_Rodriguez.txt", // ← Cambiado
      },
      json: {
        filename: "CV_Jeremy_Rodriguez.json",
        path: "/assets/documents/CV_Jeremy_Rodriguez.json",
      },
    };

    const config = fileConfig[format];

    // Crear enlace de descarga
    const link = document.createElement("a");
    link.href = config.path;
    link.download = config.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose();
  };

  const formatOptions = [
    {
      format: "pdf",
      label: "PDF",
      icon: "📄",
      description: "Formato profesional",
      color: "from-red-500 to-pink-500",
      recommended: true,
      fileInfo: "Curriculum_Vitae.pdf", // ← Actualizado
    },
    {
      format: "txt",
      label: "Texto",
      icon: "📋",
      description: "Simple y universal",
      color: "from-gray-500 to-gray-700",
      fileInfo: "CV_Jeremy_Rodriguez.txt", // ← Actualizado
    },
    {
      format: "json",
      label: "JSON",
      icon: "⚙️",
      description: "Para desarrolladores",
      color: "from-green-500 to-emerald-500",
      fileInfo: "CV_Jeremy_Rodriguez.json",
    },
  ];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📄</div>
          <h3 className="text-2xl font-bold text-white mb-2">Descargar CV</h3>
          <p className="text-gray-400">Selecciona el formato deseado</p>
        </div>

        {/* Opciones de formato */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {formatOptions.map((option) => (
            <button
              key={option.format}
              onClick={() => setSelectedFormat(option.format)}
              className={`p-3 rounded-xl border-2 transition-all duration-300 group ${
                selectedFormat === option.format
                  ? `border-white bg-gradient-to-r ${option.color} shadow-lg scale-105`
                  : "border-gray-600 bg-gray-800/50 hover:border-gray-400 hover:scale-102"
              } ${option.recommended ? "ring-2 ring-blue-400" : ""}`}
            >
              <div
                className={`text-2xl mb-1 transition-transform duration-300 ${
                  selectedFormat === option.format
                    ? "scale-110"
                    : "group-hover:scale-105"
                }`}
              >
                {option.icon}
              </div>
              <div
                className={`font-semibold text-sm transition-colors ${
                  selectedFormat === option.format
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {option.label}
                {option.recommended && (
                  <span className="block text-xs text-blue-300 mt-1">
                    Recomendado
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Información del archivo seleccionado */}
        <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700">
          <div className="text-center">
            <div className="text-gray-400 text-sm mb-1">
              Archivo seleccionado:
            </div>
            <div className="text-white font-mono text-sm">
              {
                formatOptions.find((opt) => opt.format === selectedFormat)
                  ?.fileInfo
              }
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
          >
            Cancelar
          </button>
          <button
            onClick={() => downloadCV(selectedFormat)}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
          >
            ⬇️ Descargar
          </button>
        </div>
      </div>
    </div>
  );
}
