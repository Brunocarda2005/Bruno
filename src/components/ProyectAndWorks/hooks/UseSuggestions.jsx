import { useContext, useCallback } from "react";
import { DataProyect } from "../service/dataProyect";
import Context from "../../../context/Context";

export default function UseSuggestions() {
  const { setStateGlobal, StateGlobal } = useContext(Context); // Accede al estado global y el setter

  // Genera las sugerencias por defecto
  const defaultSuggestions = useCallback(() => {
    const uniqueTags = [];

    DataProyect.forEach((project) => {
      project.tags.forEach((tag) => {
        if (!uniqueTags.some((t) => t.id === tag.id)) {
          uniqueTags.push(tag); // Agrega solo tags únicos
        }
      });
    });

    saveTags(uniqueTags); // Actualiza el estado local
  }, []);

  // Actualiza los tags en el estado global cada vez que cambien las sugerencias locales
  const saveTags = (tagsProp) => {
    setStateGlobal((lastData) => ({
      ...lastData,
      tags: tagsProp,
    }));
  };

  return {
    contextTags: StateGlobal.tags, // Tags directamente del estado global
    defaultSuggestions, // Función para regenerar sugerencias
    saveTags, // Función para actualizar los tags en el contexto
  };
}
