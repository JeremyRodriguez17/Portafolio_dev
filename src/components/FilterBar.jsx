import React from "react";

export default function FilterBar({ activeFilter, onFilterChange }) {
  const filters = [
    { key: "Todas", label: "Todas" },
    {
      key: "Aseguramiento de la Calidad del Software",
      label: "Calidad Software",
    },
    {
      key: "Pruebas Unitarias en JavaScript/TypeScript",
      label: "Pruebas JS/TS",
    },
    {
      key: "Herramientas de Testing de Software",
      label: "Herramientas Testing",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {filters.map((filter, index) => (
        <button
          key={filter.key}
          className={`px-4 py-2 rounded-lg transition-all duration-500 font-medium ${
            activeFilter === filter.key
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-gray-700/80 dark:bg-gray-300/80 text-gray-300 dark:text-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:scale-105"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
