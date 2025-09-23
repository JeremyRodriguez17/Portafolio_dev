import React, { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import CVDownloadModal from "./CVDownloadModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      const sections = ["profile", "skills", "tasks", "projects"];
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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo a la izquierda */}
        <div className="text-blue-400 font-bold text-2xl">
          <a href="#profile" className="hover:text-blue-300 transition-colors">
            Portafolio JM
          </a>
        </div>

        {/* Menú centrado */}
        <div className="hidden md:flex gap-8 text-white text-lg">
          {[
            { name: "Sobre mí", section: "profile" },
            { name: "Habilidades", section: "skills" },
            { name: "Mis Tareas", section: "tasks" },
            { name: "Proyectos", section: "projects" },
          ].map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              className={`hover:text-blue-400 transition-all duration-300 relative py-2 ${
                activeSection === item.section
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300"
              }`}
              onClick={handleNavClick}
            >
              {item.name}
              {activeSection === item.section && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></span>
              )}
            </a>
          ))}
        </div>

        {/* Espacio vacío a la derecha para balancear */}
        <div className="w-24 hidden md:block"></div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menú móvil */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-md transition-transform duration-300 z-40 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {[
              { name: "Sobre mí", section: "profile" },
              { name: "Habilidades", section: "skills" },
              { name: "Mis Tareas", section: "tasks" },
              { name: "Proyectos", section: "projects" },
            ].map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  activeSection === item.section
                    ? "text-blue-400 scale-110"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <CVDownloadModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </nav>
  );
}
