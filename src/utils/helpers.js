/**
 * Funciones auxiliares de la aplicación
 */

/**
 * Convierte temperatura de Kelvin a Celsius
 * @param {number} kelvin - Temperatura en Kelvin
 * @returns {number} Temperatura en Celsius redondeada
 */
export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

/**
 * Normaliza texto para búsqueda (minúsculas, sin acentos)
 * @param {string} text - Texto a normalizar
 * @returns {string} Texto normalizado
 */
export const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

/**
 * Filtra elementos por término de búsqueda
 * @param {Array} items - Array de items a filtrar
 * @param {string} searchTerm - Término de búsqueda
 * @param {string} property - Propiedad a buscar en los items
 * @returns {Array} Items filtrados
 */
export const filterBySearchTerm = (items, searchTerm, property) => {
  if (!searchTerm.trim()) return items;
  
  const normalizedSearch = normalizeText(searchTerm);
  
  return items.filter((item) =>
    normalizeText(item[property]).includes(normalizedSearch)
  );
};

/**
 * Obtiene tags únicos de una lista de proyectos
 * @param {Array} projects - Array de proyectos
 * @returns {Array} Array de tags únicos
 */
export const getUniqueTags = (projects) => {
  const uniqueTagsMap = new Map();

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      if (!uniqueTagsMap.has(tag.id)) {
        uniqueTagsMap.set(tag.id, tag);
      }
    });
  });

  return Array.from(uniqueTagsMap.values());
};

/**
 * Formatea una fecha al formato local
 * @param {Date} date - Fecha a formatear
 * @returns {string} Fecha formateada
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

/**
 * Debounce function para optimizar búsquedas
 * @param {Function} func - Función a ejecutar
 * @param {number} delay - Delay en ms
 * @returns {Function} Función con debounce
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
