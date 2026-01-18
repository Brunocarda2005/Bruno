import { useContext, useCallback, useMemo } from "react";
import Context from "../../../context/Context";

export default function UseProyect() {
  const { setGlobalState, globalState } = useContext(Context);

  /**
   * Verifica si un tag está activo.
   * @param {string} id - El id del tag a verificar.
   * @param {Array} allTags - Array de todos los tags disponibles.
   * @returns {boolean} True si el tag está activo, false en caso contrario.
   */
  const isTagActive = useCallback((id, allTags) => {
    return allTags.some((element) => element.id === id && element.active);
  }, []);

  /**
   * Verifica si un proyecto tiene al menos un tag activo.
   * @param {Array} projectTags - Array de tags asociados con el proyecto.
   * @param {Array} allTags - Array de todos los tags disponibles.
   * @returns {boolean} True si el proyecto tiene al menos un tag activo.
   */
  const hasActiveTag = useCallback(
    (projectTags, allTags) => {
      return projectTags.some(({ id }) => isTagActive(id, allTags));
    },
    [isTagActive],
  );

  /**
   * Verifica si hay un proyecto seleccionado.
   * @returns {boolean} True si no hay proyecto seleccionado.
   */
  const hasNoSelectedProject = useMemo(() => {
    return globalState.selectedProject === null;
  }, [globalState.selectedProject]);

  /**
   * Guarda el proyecto seleccionado en el estado global.
   * @param {Object|null} project - El proyecto a guardar o null para limpiar.
   */
  const saveSelectedProject = useCallback(
    (project) => {
      setGlobalState((prevState) => ({
        ...prevState,
        selectedProject: project,
      }));
    },
    [setGlobalState],
  );

  return {
    hasActiveTag,
    selectedProject: globalState.selectedProject,
    hasNoSelectedProject,
    saveSelectedProject,
  };
}
