// components/Navbar.jsx - VERSIÓN SIMPLE Y FUNCIONAL
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Sobre mí", section: "profile", icon: "👤" },
    { name: "Habilidades", section: "skills", icon: "⚡" },
    { name: "Mis Tareas", section: "tasks", icon: "📚" },
    { name: "Proyectos", section: "projects", icon: "🚀" },
    { name: "Contacto", section: "contact", icon: "📞" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo Simple */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">JM</span>
          </div>
          <span className="text-white font-bold text-xl">Portafolio</span>
        </div>

        {/* Menú Desktop Simple */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.section
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Botón Móvil Simple */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl z-50 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menú Móvil Simple */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 pt-20">
            <div className="flex flex-col items-center space-y-6 p-6">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className={`w-full max-w-xs py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    activeSection === item.section
                      ? "bg-blue-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
