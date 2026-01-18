/**
 * Constantes globales de la aplicación
 */

// Configuración de la API del clima
export const WEATHER_API_CONFIG = {
  KEY: "d8df9f49ba2bc4a6feef2f66b760e725",
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather",
  DEFAULT_CITY: "rosario",
};

// Niveles de habilidad
export const SKILL_LEVELS = {
  JUNIOR: "junior",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
};

// Mensajes de la aplicación (DEPRECATED - Usar useTranslation hook)
// Mantenido por compatibilidad, migrar a translations.js
export const MESSAGES = {
  NO_PROJECTS_FOUND: "No se encontraron proyectos con los tags seleccionados",
  NO_TAGS_AVAILABLE: "No hay más etiquetas disponibles",
  NO_TAGS_FOUND: "No se encontraron etiquetas",
  SELECT_TAGS: "Selecciona etiquetas para filtrar proyectos",
  WEATHER_ERROR: "Error al cargar el clima",
  CONNECTION_ERROR: "Error de conexión",
};
