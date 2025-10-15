// components/Tasks/FilterBar.jsx
import React from "react";

export default function FilterBar({ activeFilter, onFilterChange }) {
  const filters = [
    { key: "Todas", label: "Todas", icon: "📚" },

    {
      key: "Aseguramiento de la Calidad del Software",
      label: "Calidad Software",
      icon: "🏅",
    },
    {
      key: "Pruebas Unitarias en JavaScript/TypeScript",
      label: "Pruebas JS/TS",
      icon: "🧪",
    },
    {
      key: "Herramientas de Testing de Software",
      label: "Herramientas Testing",
      icon: "⚙️",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 ${
            activeFilter === filter.key
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-gray-700/80 text-gray-300 hover:bg-gray-600 border border-gray-600/50"
          }`}
          onClick={() => onFilterChange(filter.key)}
        >
          <span className="text-sm">{filter.icon}</span>
          <span className="text-sm font-medium">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
