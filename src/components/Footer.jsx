import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-cyan-500/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Borde superior con gradiente */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid Principal Mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section - Mejorada */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4 mb-6">
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <span className="text-white font-bold text-xl">JM</span>
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Jeremy Rodriguez
                </h3>
                <p className="text-gray-400 text-sm bg-gray-800/30 rounded-lg px-3 py-1 inline-block border border-gray-600/30">
                  🎓 Estudiante de Ingeniería en Sistemas
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando ideas en experiencias digitales excepcionales
              mediante código limpio, diseño intuitivo y las últimas
              tecnologías.
            </p>
          </div>

          {/* Navegación Completa - Mejorada */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🧭</span>
                Navegación
              </div>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <div className="space-y-3">
              {[
                {
                  name: "Inicio",
                  href: "#profile",
                  icon: "👤",
                  desc: "Sobre mí",
                },
                {
                  name: "Habilidades",
                  href: "#skills",
                  icon: "⚡",
                  desc: "Tecnologías",
                },
                {
                  name: "Mis Tareas",
                  href: "#tasks",
                  icon: "📚",
                  desc: "Trabajos académicos",
                },
                {
                  name: "Proyectos",
                  href: "#projects",
                  icon: "🚀",
                  desc: "Proyecto final",
                },

                {
                  name: "Contacto",
                  href: "#contact",
                  icon: "📞",
                  desc: "Contáctame",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300 text-gray-300 hover:text-white"
                >
                  <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">
                      {link.name}
                    </div>
                    <div className="text-gray-500 text-xs">{link.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto - Mejorado */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              <div className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                Contacto
              </div>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Email Universitario</div>
                  <a
                    href="mailto:jrodriguezg35@miumg.edu.gt"
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
                  >
                    jrodriguezg35@miumg.edu.gt
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                  <span className="text-purple-400">🎓</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Universidad</div>
                  <div className="text-gray-400 text-sm">Mariano Gálvez</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <span className="text-green-400">📍</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Ubicación</div>
                  <div className="text-gray-400 text-sm">Guatemala</div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociales - Mejorada */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">🌐</span>
                Conectemos
              </div>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/JeremyRodriguez17",
                  label: "GitHub",
                  name: "GitHub",
                  color:
                    "from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700",
                  textColor: "text-gray-300",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:jrodriguezg35@miumg.edu.gt",
                  label: "Email",
                  name: "Email",
                  color:
                    "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600",
                  textColor: "text-white",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-gradient-to-r ${social.color} border border-gray-600/30 rounded-xl p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm`}
                  aria-label={social.label}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <social.icon
                      className={`text-lg ${social.textColor} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className={`text-sm font-medium ${social.textColor}`}>
                      {social.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Estado */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador Elegante */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-500 shadow-lg">
                <FaHeart className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Información Inferior - Mejorada */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-400 text-sm">
            <span>© {currentYear} Jeremy Rodriguez</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Portfolio v2.0
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Todos los derechos reservados</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span>Desarrollado con</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>y</span>
            <FaCode className="text-blue-400" />
            <span>tecnología moderna</span>
          </div>
        </div>

        {/* Tech Stack - Mejorado */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 rounded-2xl px-4 py-2 border border-gray-700/30 backdrop-blur-sm">
            <span className="text-gray-400 text-sm">🏗️ Construido con</span>
            <div className="flex gap-2">
              {["React", "Tailwind", "Vite"].map((tech, index) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 text-xs font-mono px-2 py-1 rounded-lg border border-blue-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
