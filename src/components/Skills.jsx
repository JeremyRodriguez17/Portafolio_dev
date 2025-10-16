// components/Skills.jsx - VERSIÓN RESPONSIVE
import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        {
          name: "React",
          level: 85,
          color: "from-blue-500 to-cyan-500",
          icon: "⚛️",
        },
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-500 to-orange-500",
          icon: "🟨",
        },
        {
          name: "HTML5",
          level: 95,
          color: "from-orange-500 to-red-500",
          icon: "🌐",
        },
        {
          name: "CSS3/Tailwind",
          level: 88,
          color: "from-teal-500 to-blue-500",
          icon: "🎀",
        },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          level: 80,
          color: "from-green-500 to-emerald-500",
          icon: "🟢",
        },
        {
          name: "Python",
          level: 75,
          color: "from-blue-500 to-indigo-500",
          icon: "🐍",
        },
        {
          name: "MySQL",
          level: 70,
          color: "from-blue-400 to-blue-600",
          icon: "🐬",
        },
        {
          name: "MongoDB",
          level: 65,
          color: "from-green-400 to-green-600",
          icon: "🍃",
        },
      ],
    },
    {
      category: "Herramientas",
      icon: "🛠️",
      skills: [
        {
          name: "Git/GitHub",
          level: 85,
          color: "from-gray-600 to-gray-800",
          icon: "📚",
        },
        {
          name: "VS Code",
          level: 90,
          color: "from-blue-400 to-purple-500",
          icon: "💻",
        },
        {
          name: "Figma",
          level: 60,
          color: "from-purple-500 to-pink-500",
          icon: "🎨",
        },
        {
          name: "Postman",
          level: 70,
          color: "from-orange-500 to-red-500",
          icon: "📬",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto my-12 md:my-24 px-4 sm:px-6 py-8 animate-fade-in"
    >
      {/* Header Mejorado - Responsive */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-2 h-8 md:h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <div className="w-2 h-8 md:h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          Tecnologías y herramientas para crear
          <span className="text-blue-400 font-semibold">
            {" "}
            soluciones innovadoras
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.category}
            className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl md:shadow-2xl shadow-black/40 hover:shadow-blue-500/20 transition-all duration-500"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            {/* Efecto de fondo con gradiente en hover */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>

            {/* Header de Categoría - Responsive */}
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl md:rounded-2xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <span className="text-xl md:text-2xl">{category.icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500 truncate">
                  {category.category}
                </h3>
                <div className="flex items-center gap-1 md:gap-2 mt-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-400 text-xs md:text-sm truncate">
                    {category.skills.length} tecnologías
                  </span>
                </div>
              </div>
            </div>

            {/* Línea decorativa */}
            <div className="h-1 w-8 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 md:mb-6 relative z-10 group-hover:w-12 md:group-hover:w-16 transition-all duration-300"></div>

            {/* Lista de Habilidades - Responsive */}
            <div className="space-y-4 md:space-y-6 relative z-10">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="group/skill animate-slide-up"
                  style={{
                    animationDelay: `${
                      categoryIndex * 0.2 + skillIndex * 0.1
                    }s`,
                  }}
                >
                  {/* Header de Habilidad - Responsive */}
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-600/50 group-hover/skill:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span className="text-xs md:text-sm">{skill.icon}</span>
                      </div>
                      <span className="text-gray-300 font-semibold text-sm md:text-base truncate">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 flex-shrink-0 ml-2">
                      <span className="text-blue-400 font-bold text-base md:text-lg">
                        {skill.level}%
                      </span>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Barra de Progreso - Responsive */}
                  <div className="relative">
                    <div className="w-full bg-gray-700/50 rounded-full h-2 md:h-3 border border-gray-600/30 backdrop-blur-sm overflow-hidden">
                      <div
                        className={`h-2 md:h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover/skill:brightness-110 relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Efecto de brillo en la barra */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer de Categoría - Responsive */}
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-600/30 relative z-10">
              <div className="flex items-center justify-between text-xs md:text-sm">
                <span className="text-gray-400">Promedio</span>
                <span className="text-green-400 font-bold">
                  {Math.round(
                    category.skills.reduce(
                      (acc, skill) => acc + skill.level,
                      0
                    ) / category.skills.length
                  )}
                  %
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Información adicional - Responsive */}
      <div className="max-w-4xl mx-auto mt-8 md:mt-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 text-gray-300 text-xs md:text-sm">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            <span>+2 años experiencia</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span>+12 tecnologías</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span>Aprendizaje continuo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
