import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-12 pb-6 px-6 border-t border-gray-700 relative">
      {/* Efecto de iluminación sutil en el borde superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section Elegante */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">JM</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Jeremy Miller</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando ideas en experiencias digitales excepcionales
              mediante código limpio y diseño intuitivo.
            </p>
          </div>

          {/* Navegación con Detalles */}
          <div className="text-center">
            <h4 className="text-md font-semibold text-white mb-4 relative inline-block">
              Navegación
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Inicio", href: "#profile", icon: "↗" },
                { name: "Habilidades", href: "#skills", icon: "⚡" },
                { name: "Proyectos", href: "#tasks", icon: "💼" },
                { name: "Contacto", href: "#projects", icon: "📧" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm group flex items-center justify-center gap-2 py-1 rounded-lg hover:bg-gray-800/50"
                >
                  <span className="text-xs opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-1 transition-all duration-300">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Redes Sociales Mejoradas */}
          <div className="text-center lg:text-right">
            <h4 className="text-md font-semibold text-white mb-4 relative inline-block">
              Conectemos
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></span>
            </h4>
            <div className="flex justify-center lg:justify-end space-x-3 mb-4">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/JeremyRodriguez17",
                  label: "GitHub",
                  color: "hover:bg-gray-700 hover:border-gray-500",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com/in/jeremy-miller",
                  label: "LinkedIn",
                  color: "hover:bg-blue-600 hover:border-blue-400",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:jeremy@email.com",
                  label: "Email",
                  color: "hover:bg-red-500 hover:border-red-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-white ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm bg-gray-800/30 rounded-lg px-3 py-2 inline-block border border-gray-600/30">
              ✉️ jeremy@email.com
            </div>
          </div>
        </div>

        {/* Separador Elegante */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700/50"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-900 px-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <FaHeart className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Información Inferior Mejorada */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0">
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span>© {currentYear} Jeremy Miller</span>
            <span className="hidden md:inline">•</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
              Portfolio v2.0
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Desarrollado con</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>y tecnología moderna</span>
          </div>
        </div>

        {/* Tech Stack Sutil */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 rounded-full px-3 py-1 border border-gray-700/30">
            <span className="text-gray-400 text-xs">🏗️</span>
            <span className="text-gray-300 font-mono text-xs">
              React • Tailwind • Vite
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
