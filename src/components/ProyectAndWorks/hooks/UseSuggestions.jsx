import { useContext, useCallback } from "react";
import { DataProyect } from "../service/dataProyect";
import Context from "../../../context/Context";
import { getUniqueTags } from "../../../utils/helpers";

export default function UseSuggestions() {
  const { setGlobalState, globalState } = useContext(Context);

  /**
   * Actualiza los tags en el estado global.
   * @param {Array} tags - Array de tags a guardar.
   */
  const saveTags = useCallback(
    (tags) => {
      setGlobalState((prevState) => ({
        ...prevState,
        tags,
      }));
    },
    [setGlobalState],
  );

  /**
   * Actualiza el estado de un tag específico.
   * @param {number} tagId - ID del tag a actualizar.
   * @param {boolean} isActive - Nuevo estado activo del tag.
   */
  const updateTagStatus = useCallback(
    (tagId, isActive) => {
      setGlobalState((prevState) => ({
        ...prevState,
        tags: prevState.tags.map((tag) =>
          tag.id === tagId ? { ...tag, active: isActive } : tag,
        ),
      }));
    },
    [setGlobalState],
  );

  /**
   * Genera las sugerencias por defecto extrayendo tags únicos de todos los proyectos.
   */
  const generateDefaultTags = useCallback(() => {
    const uniqueTags = getUniqueTags(DataProyect);
    saveTags(uniqueTags);
  }, [saveTags]);

  return {
    tags: globalState.tags,
    generateDefaultTags,
    saveTags,
    updateTagStatus,
  };
}
