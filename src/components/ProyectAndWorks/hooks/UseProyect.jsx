import { useContext } from "react";
import Context from "../../../context/Context";

export default function UseProyect() {
  const { setStateGlobal, StateGlobal } = useContext(Context); // Accede al estado global y el setter

  /**
   * Verifies if a tag is active.
   *
   * @param {string} id - The id of the tag to check.
   * @param {Array} TAGS_ALL - An array of all available tags.
   * @returns {boolean} True if the tag is active, false otherwise.
   */
  const filter = (id, TAGS_ALL) => {
    return TAGS_ALL.some((element) => element.id === id && element.active);
  };

  /**
   * Verifies if a project has at least one active tag.
   *
   * @param {Array} tags - An array of tags associated with the project.
   * @param {Array} tagsAll - An array of all available tags.
   * @returns {boolean} True if the project has at least one active tag, false otherwise.
   */
  const filterByProyect = (tags, tagsAll) => {
    return tags.some(({ id }) => filter(id, tagsAll));
  };

  const isEmpty = () => Object.keys(StateGlobal.projects).length === 0;

  // Actualiza los tags en el estado global cada vez que cambien las sugerencias locales
  const saveProject = (projProp) => {
    setStateGlobal((lastData) => ({
      ...lastData,
      projects: projProp,
    }));
  };

  return {
    filterByProyect,
    ContextProject: StateGlobal.projects,
    isEmpty,
    saveProject,
  };
}
