import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const STORAGE_KEY = "app-language";
const SUPPORTED_LANGUAGES = ["es", "en"];
const DEFAULT_LANGUAGE = "es";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Obtener idioma del localStorage o usar el predeterminado
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(savedLanguage)
      ? savedLanguage
      : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Guardar idioma en localStorage cuando cambie
    localStorage.setItem(STORAGE_KEY, language);
    // Actualizar el atributo lang del documento
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        changeLanguage,
        isSpanish: language === "es",
        isEnglish: language === "en",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
