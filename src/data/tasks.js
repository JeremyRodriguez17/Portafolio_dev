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
  // AGREGAR ESTAS TAREAS AL FINAL DE TU ARRAY tasks (antes del export default)

  // Tarea 5 - Mapa conceptual e investigación
  {
    id: 5,
    title:
      "Mapa Conceptual e Investigación - Calidad del Software y Herramientas de Testing",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2025-2",
    description:
      "Investigación completa sobre calidad del software, factores de calidad, y herramientas de testing como Chai, Mocha y Jest.",
    details: `**Investigación sobre Calidad del Software y Herramientas de Testing**

**📊 CALIDAD DEL SOFTWARE**
- **Definición:** Capacidad de un software para cumplir con requisitos establecidos bajo condiciones específicas
- **Factores de Calidad:** Funcionalidad, Fidelidad, Mantenibilidad, Portabilidad
- **Dimensiones:** Calidad Interna, Calidad Externa, Calidad de Uso
- **Basado en normas ISO/IEC 25010**

**🛠️ HERRAMIENTAS DE TESTING INVESTIGADAS**

**Chai.js - Biblioteca de Aserciones para JavaScript**
- Múltiples estilos de afirmación: Assert, Expect, Should
- Afirmaciones encadenables y mensajes de error enriquecidos
- Compatibilidad con complementos y entornos (Node.js y navegador)
- Integración con Mocha, Jasmine y otros frameworks

**Mocha.js - Framework de Pruebas de JavaScript**
- Pruebas síncronas y asíncronas
- Reportes detallados y utilidades de ejecución
- Ideal para pruebas unitarias y de integración

**Jest - Framework de Testing para JavaScript**
- Cobertura del 100% de las funciones
- Configuración cero y fácil integración
- Snapshots y mocking integrado

**NPM (Node Package Manager)**
- Gestor de paquetes JavaScript más utilizado
- Instalación rápida de librerías y dependencias

**🎯 OBJETIVOS DE APRENDIZAJE**
- Comprender los fundamentos de la calidad del software
- Conocer las principales herramientas de testing en JavaScript
- Aplicar técnicas de pruebas unitarias y de integración
- Implementar aserciones efectivas con Chai.js`,
    documentUrl:
      "/documents/tareas/Tarea 1.2. - Mapa conceptual e investigación.pdf",
    documentType: "pdf",
    technologies: [
      "JavaScript",
      "Chai.js",
      "Mocha.js",
      "Jest",
      "Node.js",
      "Testing",
      "ISO 25010",
      "Calidad de Software",
    ],
    date: "17 de Julio de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Intermedia",
    type: "document",
    category: "research",
  },

  // Tarea 6 - Análisis crítico del aseguramiento de calidad
  {
    id: 6,
    title:
      "Análisis Crítico del Aseguramiento de la Calidad - Estándares Internacionales",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2025-2",
    description:
      "Análisis profundo de estándares internacionales ISO 25010, ISO 29119 e IEEE 730 para calidad del software.",
    details: `**ANÁLISIS CRÍTICO DE ESTÁNDARES INTERNACIONALES DE CALIDAD**

**🏆 ESTÁNDARES ANALIZADOS**

**1. ISO/IEC 25010 - Modelo de Calidad del Producto Software**
- **Propósito:** Definir características de calidad del software
- **Características principales:** Funcionalidad, Rendimiento, Seguridad, Usabilidad, Compatibilidad, Mantenibilidad, Portabilidad
- **Aplicación:** Evaluación sistemática de productos software
- **Beneficios:** Comunicación clara, reducción de errores, métricas estandarizadas

**2. ISO/IEC/IEEE 29119 - Estándares de Pruebas de Software**
- **Propósito:** Establecer procesos estandarizados para pruebas de software
- **Componentes:** Conceptos, Procesos, Documentación, Técnicas, Pruebas basadas en palabras clave
- **Aplicación:** Organización de equipos de testing y documentación de resultados
- **Beneficios:** Terminología común, mejora en control de pruebas, detección temprana de errores

**3. IEEE 730 - Planes de Aseguramiento de la Calidad**
- **Propósito:** Definir planificación sistemática de actividades de calidad
- **Componentes SQAP:** Definición de requisitos, planes de prueba, metodologías de revisión, gestión de riesgos
- **Aplicación:** Creación de planes claros con responsables y métricas
- **Beneficios:** Estructura ordenada, prevención de problemas, alineación del equipo

**📊 COMPARATIVA DE MODELOS DE CALIDAD**
- **ISO 25010:** Enfoque moderno e integral (2011)
- **Modelo McCall:** Enfoque técnico-histórico (1977) 
- **Modelo Boehm:** Perspectiva del usuario (1981)

**👥 ROLES EN EL ASEGURAMIENTO DE CALIDAD**
- Project Manager: Liderazgo y organización
- Scrum Master: Metodologías ágiles
- Analista Comercial: Necesidades del cliente

**⚠️ RIESGOS DE NO IMPLEMENTAR CALIDAD**
- Software no funcional, pérdida de clientes, costos adicionales, impactos críticos`,
    documentUrl:
      "/documents/tareas/Tarea 2 - Análisis crítico del aseguramiento de la calidad de software.pdf",
    documentType: "pdf",
    technologies: [
      "ISO 25010",
      "ISO 29119",
      "IEEE 730",
      "Gestión de Calidad",
      "SQAP",
      "Procesos QA",
      "Estándares Internacionales",
      "Modelos de Calidad",
    ],
    date: "24 de Julio de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Avanzada",
    type: "document",
    category: "analysis",
  },

  // Tarea 7 - Guía OWASP y Planes de Prueba
  {
    id: 7,
    title: "Guía OWASP y Planes de Prueba - Seguridad Web y Casos de Prueba",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2025-2",
    description:
      "Guía completa de seguridad web basada en OWASP Top 10 y documentación de planes y casos de prueba.",
    details: `**GUÍA OWASP TOP 10 2021 Y PLANES DE PRUEBA**

**🛡️ GUÍA OWASP TOP 10 - SEGURIDAD WEB**

**Vulnerabilidades Críticas y Prevención:**

1. **Accesos sin Permiso (Broken Access Control)**
   - Prevención: Asignación específica de permisos, ocultar funciones no autorizadas

2. **Protección Débil de Datos (Cryptographic Failures)**
   - Prevención: Cifrado fuerte, uso de HTTPS, validación de datos sensibles

3. **Inyección de Datos Maliciosos (Injection)**
   - Prevención: Validación de entradas, evitar ejecución automática

4. **Falta de Seguridad en el Diseño (Insecure Design)**
   - Prevención: Planificación de seguridad desde el inicio, análisis de riesgos

5. **Mala Configuración del Sistema (Security Misconfiguration)**
   - Prevención: Desactivar funciones innecesarias, cambiar contraseñas por defecto

6. **Componentes Vulnerables y Desactualizados**
   - Prevención: Mantener actualizaciones, evitar herramientas sin soporte

7. **Fallos de Identificación y Autenticación**
   - Prevención: Contraseñas fuertes, verificación en dos pasos

8. **Fallos de Integridad de Software y Datos**
   - Prevención: Verificación de fuentes confiables, control de cambios

9. **Fallos de Registro y Monitoreo de Seguridad**
   - Prevención: Activación de logs, revisiones regulares, alertas

10. **Falsificación de Peticiones del Lado del Servidor (SSRF)**
    - Prevención: Control de conexiones, aprobación previa de sitios

**📋 PLANES Y CASOS DE PRUEBA**

**Plan de Pruebas:**
- **Alcance:** Definición de requisitos técnicos y funcionales
- **Objetivos:** Validación completa, planificación detallada, gestión de defectos
- **Componentes:** Programación, recursos, entorno, herramientas, gestión de riesgos

**Casos de Prueba:**
- **Formato Estándar:** ID, escenario, pasos, datos, resultados esperados/actuales
- **Ejemplo Práctico:** Catálogo CRUD (Crear, Editar, Eliminar, Listar)
- **Validación:** Funcionalidad completa, manejo de errores, prevención de duplicados`,
    documentUrl:
      "/documents/tareas/Tarea 3 - Guia OWASP, Investigación Planes y Casos de prueba.pdf",
    documentType: "pdf",
    technologies: [
      "OWASP Top 10",
      "Seguridad Web",
      "Planes de Prueba",
      "Casos de Prueba",
      "Testing Manual",
      "CRUD Testing",
      "Vulnerabilidades",
      "Ciberseguridad",
    ],
    date: "1 de Agosto de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Intermedia",
    type: "document",
    category: "security",
  },

  // Tarea 8 - Tipos de prueba y herramientas
  {
    id: 8,
    title:
      "Investigación de Herramientas para Pruebas de Software - Funcionales, Rendimiento y Seguridad",
    course: "Aseguramiento de la Calidad del Software",
    semester: "2025-2",
    description:
      "Documentación completa de herramientas para pruebas funcionales, de rendimiento y seguridad del software.",
    details: `**INVESTIGACIÓN DE HERRAMIENTAS PARA PRUEBAS DE SOFTWARE**

**🔧 PRUEBAS FUNCIONALES**

**Definición:** Validación de funcionalidades específicas según requerimientos del cliente

**Tipos:**
- Pruebas de Humo (Smoke Testing)
- Pruebas de Regresión  
- Pruebas de Integración
- Pruebas de Aceptación del Usuario (UAT)
- Pruebas de Caja Negra

**Herramientas Analizadas:**

**Selenium IDE**
- Automatización de pruebas en navegadores
- Grabación y reproducción de tests
- Compatibilidad multiplataforma
- Integración con CI/CD

**Postman**
- Pruebas de APIs funcionales
- Gestión de entornos y colecciones
- Pruebas automatizadas y colaboración
- Interfaz intuitiva para desarrollo

**📈 PRUEBAS DE RENDIMIENTO**

**Definición:** Medición de velocidad, respuesta, uso de recursos y escalabilidad

**Tipos:**
- Pruebas de Carga (Load Testing)
- Pruebas de Estrés (Stress Testing) 
- Pruebas de Escalabilidad (Scalability Testing)

**Herramientas Analizadas:**

**Apache JMeter**
- Código abierto y gratuito
- Soporte múltiples protocolos
- Escalabilidad e integración CI/CD
- Amplia comunidad y plugins

**LoadRunner**
- Solución empresarial comercial
- Scripting avanzado con VuGen
- Análisis detallado y monitoreo en tiempo real
- Soporte para más de 50 protocolos

**🛡️ PRUEBAS DE SEGURIDAD**

**Definición:** Identificación de vulnerabilidades, amenazas y riesgos en el sistema

**Ejemplo:** Inyección SQL - Manipulación de consultas a base de datos

**Herramientas Analizadas:**

**SonarQube**
- Análisis de calidad del código fuente
- Detección de vulnerabilidades y aplicación de normas
- Soporte para múltiples lenguajes de programación
- Métricas de arquitectura, duplicación, complejidad

**OWASP ZAP**
- Código abierto para seguridad web
- Escaneo activo y pasivo de vulnerabilidades
- Proxy interceptador y reporting detallado
- Fácil uso para principiantes

**🎯 CONCLUSIONES Y RECOMENDACIONES**
- Importancia de la selección adecuada de herramientas
- Integración en el ciclo de desarrollo
- Impacto en la calidad y seguridad del software
- Mejores prácticas para implementación`,
    documentUrl: "/documents/tareas/Tarea 4 - Tipos de prueba.pdf",
    documentType: "pdf",
    technologies: [
      "Selenium",
      "Postman",
      "Apache JMeter",
      "LoadRunner",
      "SonarQube",
      "OWASP ZAP",
      "Pruebas Funcionales",
      "Pruebas de Rendimiento",
      "Pruebas de Seguridad",
      "Automatización",
    ],
    date: "11 de Agosto de 2025",
    status: "Completado",
    profesor: "Ing. Carmelo Estuardo Mayén Monterroso",
    universidad: "Universidad Mariano Gálvez",
    complejidad: "Avanzada",
    type: "document",
    category: "tools",
  },
];
export default tasks;
