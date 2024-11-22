import "./Proyect.css";
import { DataProyect } from "../../service/dataProyect";
import Card from "../card/Card";
import ProyectDetail from "../proyectDetail/ProyectDetail";
import UseProyect from "../../hooks/UseProyect";
import UseSuggestions from "../../hooks/UseSuggestions";

export function Proyect() {
  const { filterByProyect, isEmpty } = UseProyect();
  const { contextTags } = UseSuggestions();

  /**
   * Function to filter and render project cards based on the selected tags.
   *
   * @param {Object} data - The project data object containing properties: key, icon, img, detail, and tags.
   * @param {string} data.key - Unique identifier for the project.
   * @param {string} data.icon - Icon URL for the project.
   * @param {string} data.img - Image URL for the project.
   * @param {Object} data.detail - Detailed information about the project.
   * @param {Array<number>} data.tags - Array of tags associated with the project.
   *
   * @returns {JSX.Element|null} - Returns a Card component if the project should be rendered, otherwise returns null.
   */
  const filterCard = (data) => {
    const { key, tags } = data;

    // Evaluate if the project should be rendered
    return filterByProyect(tags, contextTags) ? (
      <Card key={key} data={data} />
    ) : null;
  };

  return (
    <section className="projects-content">
      <section className="projects-content__cards">
        {isEmpty() ? (
          DataProyect.map((data) => {
            return filterCard(data); // Filtrar y renderizar proyectos
          })
        ) : (
          <ProyectDetail />
        )}
      </section>
    </section>
  );
}
