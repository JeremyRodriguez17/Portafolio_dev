// data/tasks.js - TÍTULO ACTUALIZADO PARA TAREA 1
const tasks = [
  // Tarea 5 - TÍTULO MÁS FUNCIONAL
  {
    id: 1,
    title: "Validador de Mayoría de Edad y Préstamos con Pruebas Jest",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2024-2",
    description:
      "Sistema de validación con funciones esMayorDeEdad y puedeAprobarPrestamo, incluyendo pruebas unitarias completas.",
    details: `Desarrollo de un módulo en Node.js (TypeScript/JavaScript) que implementa:
    
• Función esMayorDeEdad: Valida si una persona es mayor de edad basado en su edad
• Función puedeAprobarPrestamo: Evalúa condiciones para aprobación de préstamos
• Tablas de prueba: Clases de equivalencia y tablas de decisiones
• Pruebas unitarias con Jest: Cobertura del 100% de las funciones
• Video explicativo: Demostración con PIP del estudiante

**Técnicas aplicadas:** Pruebas de software, Jest, Node.js, TypeScript, Validación de requisitos.`,
    githubUrl: "https://github.com/JeremyRodriguez17/ProyectoU.git",
    technologies: [
      "Node.js",
      "TypeScript",
      "Jest",
      "JavaScript",
      "Testing",
      "QA",
    ],
    date: "2024-08-29",
    status: "Completado",
    profesor: "Ing. [Nombre del Profesor]",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Intermedia",
  },

  // Tarea 6 - Mantener igual
  {
    id: 2,
    title: "Sistema de Aprobación de Préstamos por Perfil de Cliente",
    course: "Pruebas Unitarias en JavaScript/TypeScript",
    semester: "2024-2",
    description:
      "Función que evalúa aprobación de préstamos para estudiantes, empleados, independientes y retirados.",
    details: `**Sistema de Aprobación de Préstamos Bancarios por Perfil**

Desarrollo de una función en JavaScript/TypeScript que determina la aprobación de préstamos basándose en múltiples reglas de negocio y perfiles de cliente.

**🔴 Rechazo Inmediato:**
- Si moraActiva = true O score < 600 ⇒ NO aprobado

**📋 Reglas Base (aplican a todos los perfiles):**
- Debe tener ingresosVerificados = true Y dti ≤ 35
- Excepción para estudiantes: puede sustituir con garante = true

**🎯 Umbrales por Perfil (si pasa reglas base):**
- **Estudiante:** garante = true O score ≥ 650
- **Empleado:** antiguedadMeses ≥ 6 Y score ≥ 650  
- **Independiente:** antiguedadMeses ≥ 12 Y score ≥ 670
- **Retirado:** score ≥ 640

**🧪 Pruebas Unitarias Implementadas:**
- Tests para cada perfil y escenario posible
- Validación de casos límite y edge cases
- Cobertura del 100% de las funcionalidades`,
    githubUrl:
      "https://github.com/JeremyRodriguez17/Tarea-6-Unit-test---JS-TS.git",
    demoUrl: "https://tarea-6-unit-test-js-ts.vercel.app",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Jest",
      "Testing Library",
      "Node.js",
      "Unit Testing",
      "Vercel",
    ],
    date: "2024-09-13",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Avanzada",
  },

  // Tarea 7 - Mantener igual
  {
    id: 3,
    title: "Clases de Equivalencia, Valores Frontera y Tablas de Decisión",
    course: "Herramientas de Testing de Software",
    semester: "2024-2",
    description:
      "Implementación práctica de técnicas avanzadas de testing con Vitest y Node.js.",
    details: `**Técnicas Avanzadas de Testing: Clases de Equivalencia y Tablas de Decisión**

Implementación completa de dos técnicas fundamentales de testing de software con ejemplos prácticos, código y pruebas unitarias.

**📊 PARTE 1: Clases de Equivalencia y Análisis de Valores Frontera**

**Objetivo:** Desarrollar un ejemplo práctico aplicando:
- Identificación de clases de equivalencia válidas e inválidas
- Análisis de valores en la frontera para casos límite
- Desarrollo del código correspondiente
- Pruebas unitarias con cobertura del 100%

**Ejemplo Implementado:** Sistema de validación de rangos numéricos con:
- Clases de equivalencia para diferentes intervalos
- Valores frontera en los límites de cada intervalo
- Casos de prueba para condiciones límite

**📋 PARTE 2: Tablas de Decisión**

**Objetivo:** Elaborar un ejemplo práctico de tablas de decisión con:
- Definición de condiciones y acciones
- Combinación exhaustiva de reglas de negocio
- Desarrollo del código basado en la tabla de decisión
- Pruebas unitarias para validar cada regla

**Ejemplo Implementado:** Sistema de aprobación de descuentos con múltiples condiciones:
- Condiciones: tipo de cliente, monto de compra, antigüedad
- Actions: porcentaje de descuento aplicable
- Tabla de decisión con todas las combinaciones posibles`,
    githubUrl:
      "https://github.com/JeremyRodriguez17/Tarea-calidad-software.git",
    technologies: [
      "Node.js",
      "Vitest",
      "JavaScript",
      "TypeScript",
      "Testing",
      "Clases de Equivalencia",
      "Tablas de Decisión",
      "Valores Frontera",
    ],
    date: "2024-09-20",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Avanzada",
  },
];

export default tasks;
