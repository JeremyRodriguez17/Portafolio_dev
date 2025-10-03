// components/Navbar.jsx - Mejoremos las animaciones
import React, { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["profile", "skills", "tasks", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre mí", section: "profile" },
    { name: "Habilidades", section: "skills" },
    { name: "Mis Tareas", section: "tasks" },
    { name: "Proyectos", section: "projects" },
    { name: "Contacto", section: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo con mejor animación */}
        <div className="text-blue-400 font-bold text-2xl">
          <a
            href="#profile"
            className="hover:text-blue-300 transition-all duration-300 hover:scale-105 block"
          >
            🚀 Portafolio JM
          </a>
        </div>

        {/* Menú desktop mejorado */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              className={`relative py-2 transition-all duration-300 group ${
                activeSection === item.section
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                  activeSection === item.section
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Espacio balanceado */}
        <div className="w-24 hidden md:block"></div>

        {/* Botón móvil mejorado */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl z-50 p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menú móvil mejorado */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-transform duration-500 z-40 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                  activeSection === item.section
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
