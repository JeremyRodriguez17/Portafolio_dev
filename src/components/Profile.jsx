// components/Profile.jsx - VERSIÓN ELEGANTE MEJORADA
import React from "react";

export default function Profile() {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda - Imagen y Badges Mejorados */}
          <div className="flex flex-col items-center lg:items-start space-y-8 animate-slide-up">
            {/* Contenedor de Imagen con Efectos Mejorados */}
            <div className="relative group">
              {/* Anillo de gradiente animado */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-70 blur-xl group-hover:opacity-90 transition-all duration-700 animate-spin-slow"></div>

              {/* Anillo interior */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Imagen principal */}
              <img
                src="/Perfil3.jpeg"
                alt="Jeremy Miller"
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-all duration-500 z-20"
              />

              {/* Partículas flotantes */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/30"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/30 delay-1000"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/30 delay-500"></div>
            </div>

            {/* Badges de Estado Mejorados */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full">
              <span className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 px-5 py-3 rounded-2xl text-sm font-medium border border-green-500/30 backdrop-blur-sm flex items-center gap-3 shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                <span>Disponible para proyectos</span>
              </span>
              <span className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 px-5 py-3 rounded-2xl text-sm font-medium border border-blue-500/30 backdrop-blur-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300">
                <span className="text-lg">🎓</span>
                <span>Estudiante Universitario</span>
              </span>
            </div>
          </div>

          {/* Columna Derecha - Información Mejorada */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Título Principal Mejorado */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Hola, soy
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
                  Jeremy Rodriguez
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
            </div>

            {/* Descripción Mejorada */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 mb-8 hover:border-gray-600/50 transition-all duration-500">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Estudiante de{" "}
                <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg">
                  Ingeniería de Sistemas
                </span>{" "}
                apasionado por el desarrollo web y la inteligencia artificial.
                En este portafolio muestro mi progreso académico y los proyectos
                desarrollados durante mi formación universitaria.
              </p>
            </div>

            {/* Habilidades Destacadas Mejoradas */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 text-lg">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-300">
                  Tecnologías que domino
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "React",
                    color: "from-cyan-500 to-blue-500",
                    icon: "⚛️",
                  },
                  {
                    name: "Node.js",
                    color: "from-green-500 to-emerald-500",
                    icon: "🟢",
                  },
                  {
                    name: "JavaScript",
                    color: "from-yellow-500 to-orange-500",
                    icon: "🟨",
                  },
                  {
                    name: "Python",
                    color: "from-blue-500 to-indigo-500",
                    icon: "🐍",
                  },
                  {
                    name: "Tailwind CSS",
                    color: "from-teal-400 to-cyan-500",
                    icon: "🎨",
                  },
                  {
                    name: "MySQL",
                    color: "from-blue-400 to-blue-600",
                    icon: "🐬",
                  },
                ].map((tech, index) => (
                  <span
                    key={tech.name}
                    className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <span className="text-xs group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones de Acción Mejorados */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#tasks"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 flex items-center gap-3 overflow-hidden"
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  📚
                </span>
                <span className="relative z-10">Ver Mis Tareas</span>
              </a>

              <a
                href="#projects"
                className="group relative bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-300 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl border border-gray-600/30 hover:border-gray-500/50 flex items-center gap-3 overflow-hidden"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  🚀
                </span>
                <span className="relative z-10">Ver Proyectos</span>
              </a>
            </div>
          </div>
        </div>

        {/* Indicador de Scroll Mejorado */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="text-gray-400 text-sm mb-3 font-medium">
            Desplázate para explorar
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-12 border-2 border-gray-400/50 rounded-2xl flex justify-center relative group hover:border-blue-400/50 transition-colors duration-300">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce-gentle group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de partículas adicionales */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40 delay-700"></div>
    </section>
  );
}
