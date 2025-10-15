// components/Profile.jsx - DISEÑO MEJORADO
import React from "react";

export default function Profile() {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda - Imagen y Badges */}
          <div className="flex flex-col items-center lg:items-start space-y-8 animate-slide-up">
            {/* Imagen de Perfil con Efecto */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="/mi-foto.jpeg"
                alt="Jeremy Miller"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
              />
              {/* Efecto de partículas */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* Badges de Estado */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Disponible para proyectos
              </span>
              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                🎓 Estudiante Universitario
              </span>
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Título Principal */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hola, soy
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Jeremy Rodriguez
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Estudiante de{" "}
              <span className="text-blue-400 font-semibold">
                Ingeniería de Sistemas
              </span>{" "}
              apasionado por el desarrollo web y la inteligencia artificial. En
              este portafolio muestro mi progreso académico y los proyectos
              desarrollados durante mi formación universitaria.
            </p>

            {/* Habilidades Destacadas */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-400 mb-4">
                Tecnologías que domino:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", color: "from-cyan-500 to-blue-500" },
                  { name: "Node.js", color: "from-green-500 to-emerald-500" },
                  {
                    name: "JavaScript",
                    color: "from-yellow-500 to-orange-500",
                  },
                  { name: "Python", color: "from-blue-500 to-indigo-500" },
                  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
                  { name: "MySQL", color: "from-blue-400 to-blue-600" },
                ].map((tech, index) => (
                  <span
                    key={tech.name}
                    className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#tasks"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                📚 Ver Mis Tareas
              </a>
            </div>
          </div>
        </div>

        {/* Indicador de Scroll */}
        <div className="text-center mt-16 animate-bounce-gentle">
          <div className="text-gray-400 text-sm mb-2">
            Desplázate para ver más
          </div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
