// Tarea 5
const tasks = [
  {
    id: 1,
    title: "Validador de Mayoría de Edad y Préstamos con Pruebas Jest ",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2025-2",
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
    date: "29 de Agosto de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Intermedia",
  },

  // Tarea 6
  {
    id: 2,
    title: "Sistema de Aprobación de Préstamos por Perfil de Cliente",
    course: "Pruebas Unitarias en JavaScript/TypeScript",
    semester: "2025-2",
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
    date: "13 de Septiembre de 2025 ",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Avanzada",
  },

  // Tarea 7
  {
    id: 3,
    title: "Clases de Equivalencia, Valores Frontera y Tablas de Decisión",
    course: "Herramientas de Testing de Software",
    semester: "2025-2",
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
    date: "20 de Septiembre de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Avanzada",
  },

  // Tarea 8

  {
    id: 4,
    title: "Registro de errores",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2025-2",
    description:
      "Registro y seguimiento de bugs reportados utilizando herramientas de gestión de issues.",
    details: `**Registro y Seguimiento de Bugs**

Implementación completa de dos técnicas fundamentales de testing de software con ejemplos prácticos, código y pruebas unitarias.

**📊 PARTE 1: Registro de Bugs Reportados **

- Objetivo: Registrar los 12 bugs identificados en el documento proporcionado utilizando
 una herramienta de seguimiento de bugs:

 - Bugs Registrados:

 - El software es lento o tiene un rendimiento deficiente (bug #12)
 - El software no es intuitivo y es difícil de usar (bug #11)
 - El software no cumple con los requisitos del usuario (bug #10)
 - El software no es seguro y puede ser vulnerable a ataques (bug #9)
 - Los datos se pierden o corrompen (bug #8)
 - El software no funciona en un determinado sistema operativo o dispositivo (bug #7)
 - El software no se instala correctamente (bug #6)
 - La aplicación se bloquea al intentar abrir un archivo (bug #5)
 - El menú desplegable no funciona correctamente (bug #4)
 - El formulario de contacto no se envía correctamente (bug #3)
 - El botón "Enviar" no funciona (bug #2)

 Herramienta Utilizada: GitHub Issues 

**📋 PARTE 2: Seguimiento y Gestión de Bugs**

- Objetivo: Realizar el seguimiento completo de cada bug reportado mediante:

Proceso de Seguimiento:

- Registro inicial con descripción detallada
- Categorización por tipo y prioridad
- Asignación de responsables
- Establecimiento de estados (abierto, en progreso, resuelto, cerrado)
- Seguimiento de comentarios y actualizaciones
- Verificación de resolución y cierre

Metodología Aplicada:

- Uso de labels para clasificación
- Sistema de milestones para agrupación
- Comentarios de progreso
- Validación de soluciones implementadas

Documentación del proceso completo`,
    githubUrl: "https://github.com/JeremyRodriguez17/Seguimiento-bugs/issues",
    technologies: [
      "GitHub Issues",
      "Gestión de Bugs",
      "Seguimiento de Errores",
      "Issue Tracking",
      "Quality Assurance",
      "Testing",
    ],
    date: "11 de Octubre de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Intermedia",
  },
];
export default tasks;
