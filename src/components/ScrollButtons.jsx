// components/ScrollButtons.jsx - BOTÓN INTELIGENTE
import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function ScrollButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Mostrar botón después de scrollear 300px
      setIsVisible(scrollTop > 300);

      // Verificar si está en el fondo de la página
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // Botón inteligente: cambia función según posición
  const handleScrollClick = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      scrollToBottom();
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollClick}
          className="fixed right-6 bottom-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 group backdrop-blur-sm border border-blue-400/30"
          aria-label={isAtBottom ? "Subir al inicio" : "Bajar al final"}
        >
          <div className="relative">
            {/* Icono que cambia según posición */}
            <div
              className={`transition-transform duration-500 ${
                isAtBottom ? "rotate-0" : "rotate-180"
              }`}
            >
              <FaChevronUp className="text-lg mx-auto transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Indicador de estado */}
            <div
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 transition-colors duration-300 ${
                isAtBottom ? "bg-green-400" : "bg-yellow-400"
              }`}
            ></div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </button>
      )}
    </>
  );
}
