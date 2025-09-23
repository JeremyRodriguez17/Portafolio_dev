// components/Skills.jsx
import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85, color: "from-blue-500 to-cyan-500" },
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-500 to-orange-500",
        },
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        {
          name: "CSS3/Tailwind",
          level: 88,
          color: "from-teal-500 to-blue-500",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
        { name: "Python", level: 75, color: "from-blue-500 to-indigo-500" },
        { name: "MySQL", level: 70, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 65, color: "from-green-400 to-green-600" },
      ],
    },
    {
      category: "Herramientas",
      skills: [
        { name: "Git/GitHub", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-purple-500" },
        { name: "Figma", level: 60, color: "from-purple-500 to-pink-500" },
        { name: "Postman", level: 70, color: "from-orange-500 to-red-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto my-16 p-6 animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Habilidades Técnicas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.category}
            className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg shadow-black/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center border-b border-gray-700 pb-3">
              {category.category}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="animate-slide-up"
                  style={{
                    animationDelay: `${
                      categoryIndex * 0.2 + skillIndex * 0.1
                    }s`,
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-blue-400 text-sm font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
