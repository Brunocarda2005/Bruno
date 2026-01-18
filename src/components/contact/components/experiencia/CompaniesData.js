/**
 * Datos de empresas y experiencia laboral - Bilingüe (ES/EN)
 * 
 * Estructura:
 * - id: Identificador único de la empresa
 * - nombre: { es: string, en: string } - Nombre de la empresa en ambos idiomas
 * - nivelFinal: { es: string, en: string } - Título/nivel del último puesto alcanzado
 * - color: Color representativo de la empresa (opcional, usa el color secundario por defecto)
 * - posiciones: Array de posiciones en la empresa (orden cronológico inverso - más reciente primero)
 *   - id: Identificador único de la posición
 *   - titulo: { es: string, en: string } - Título del puesto
 *   - fechaInicio: Fecha de inicio (formato: "MM/YYYY")
 *   - fechaFin: { es: string, en: string } - Fecha de fin (formato: "MM/YYYY" o "Presente"/"Present")
 *   - descripcion: { es: string, en: string } - Descripción detallada de responsabilidades y logros
 */

export const CompaniesData = [
  {
    id: 1,
    nombre: {
      es: "Cycle",
      en: "Cycle"
    },
    nivelFinal: {
      es: "Mid Senior Fullstack Developer",
      en: "Mid Senior Fullstack Developer"
    },
    color: "#5c77ff",
    posiciones: [
      {
        id: 3,
        titulo: {
          es: "Mid Senior Fullstack Developer",
          en: "Mid Senior Fullstack Developer"
        },
        fechaInicio: "06/2024",
        fechaFin: {
          es: "09/2024",
          en: "09/2024"
        },
        descripcion: {
          es: "Lideré el diseño de interfaces y lógica back-end, optimizando APIs y acelerando el rendimiento de la página. Creé una metodología interna para formularios y re-documenté gran parte del código base, mejorando significativamente la mantenibilidad del proyecto.",
          en: "Led interface design and back-end logic, optimizing APIs and accelerating page performance. Created an internal methodology for forms and re-documented much of the codebase, significantly improving project maintainability."
        }
      },
      {
        id: 2,
        titulo: {
          es: "Fullstack Developer",
          en: "Fullstack Developer"
        },
        fechaInicio: "04/2024",
        fechaFin: {
          es: "06/2024",
          en: "06/2024"
        },
        descripcion: {
          es: "Desarrollé funcionalidades completas trabajando con Angular, TypeScript y .NET. Implementé variables CSS personalizadas y propuse mejoras en el consumo de APIs que resultaron en una notable aceleración del sitio.",
          en: "Developed complete features working with Angular, TypeScript, and .NET. Implemented custom CSS variables and proposed improvements in API consumption that resulted in notable site acceleration."
        }
      },
      {
        id: 1,
        titulo: {
          es: "Junior Fullstack Developer",
          en: "Junior Fullstack Developer"
        },
        fechaInicio: "02/2024",
        fechaFin: {
          es: "04/2024",
          en: "04/2024"
        },
        descripcion: {
          es: "Inicié mi carrera en Cycle participando en el desarrollo de aplicaciones web, aprendiendo las mejores prácticas de desarrollo full stack y contribuyendo al mantenimiento del código existente.",
          en: "Started my career at Cycle participating in web application development, learning full stack development best practices and contributing to existing code maintenance."
        }
      }
    ]
  },
  {
    id: 2,
    nombre: {
      es: "ArWeb",
      en: "ArWeb"
    },
    nivelFinal: {
      es: "Junior Frontend Developer",
      en: "Junior Frontend Developer"
    },
    color: "#5c77ff",
    posiciones: [
      {
        id: 1,
        titulo: {
          es: "Junior Frontend Developer & Team Leader",
          en: "Junior Frontend Developer & Team Leader"
        },
        fechaInicio: "01/2024",
        fechaFin: {
          es: "02/2024",
          en: "02/2024"
        },
        descripcion: {
          es: "Lideré un equipo de desarrollo en la creación de un e-commerce, destacándome en UX/UI y desarrollo Frontend con React.js y CSS. Optimicé código existente, implementé lógica compleja eficientemente y manejé el consumo de APIs logrando resultados óptimos. Esta experiencia me enseñó valiosas lecciones sobre liderazgo, comunicación y manejo del estrés.",
          en: "Led a development team in creating an e-commerce platform, excelling in UX/UI and Frontend development with React.js and CSS. Optimized existing code, efficiently implemented complex logic, and managed API consumption achieving optimal results. This experience taught me valuable lessons about leadership, communication, and stress management."
        }
      }
    ]
  }
];
