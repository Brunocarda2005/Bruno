import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "./translations";

/**
 * Hook personalizado para usar traducciones en componentes
 * 
 * @returns {Object} - Objeto con funciones y datos de traducción
 * @returns {Function} t - Función para obtener traducciones por clave (ej: t('nav.projects'))
 * @returns {string} language - Idioma actual ('es' o 'en')
 * @returns {Function} toggleLanguage - Función para alternar entre idiomas
 * @returns {Function} changeLanguage - Función para cambiar a un idioma específico
 * @returns {boolean} isSpanish - True si el idioma actual es español
 * @returns {boolean} isEnglish - True si el idioma actual es inglés
 */
export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }

  const { language, toggleLanguage, changeLanguage, isSpanish, isEnglish } = context;

  /**
   * Obtiene una traducción por su clave
   * @param {string} key - Clave de la traducción en formato punto (ej: 'nav.projects')
   * @param {Object} params - Parámetros opcionales para interpolación o pluralización (count, etc.)
   * @returns {string} - Texto traducido
   * 
   * @example
   * const { t } = useTranslation();
   * const projectsText = t('nav.projects'); // "Proyectos" o "Projects"
   * const yearsText = t('contact.experience.year', { count: 2 }); // "años" o "years"
   */
  const t = (key, params = {}) => {
    const keys = key.split(".");
    let value = translations[language];

    // Navegar por el objeto de traducciones
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        // Si no se encuentra la clave, devolver la clave misma
        console.warn(`Translation key not found: ${key} for language: ${language}`);
        return key;
      }
    }

    // Manejo especial para pluralización de año/mes
    if (key === 'contact.experience.year' && params.count !== undefined) {
      return params.count === 1 
        ? translations[language].contact.experience.year 
        : translations[language].contact.experience.years;
    }

    if (key === 'contact.experience.month' && params.count !== undefined) {
      return params.count === 1 
        ? translations[language].contact.experience.month 
        : translations[language].contact.experience.months;
    }

    // Si hay parámetros, reemplazarlos en el texto
    if (typeof value === "string" && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
        return params[paramKey] || match;
      });
    }

    return value || key;
  };

  return {
    t,
    language,
    toggleLanguage,
    changeLanguage,
    isSpanish,
    isEnglish,
  };
}
