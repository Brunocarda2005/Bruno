import "./Proyect.css";
import { DataProyect } from "../../service/dataProyect";
import Card from "../card/Card";

export function Proyect(params) {
  const { tags } = params; // Lista de tags activos
  const tagsAll = tags;

  const filterCard = (data) => {
    const { key, icon, img, textA, a, textDes, tags } = data;

    // Verifica si un tag está activo
    const filter = (id) => {
      return tagsAll.some((element) => element.id === id && element.active);
    };

    // Verifica si el proyecto tiene al menos un tag activo
    const filterByProyect = () => {
      return tags.some(({ id }) => filter(id));
    };

    // Evalúa si el proyecto debe renderizarse
    return filterByProyect() ? (
      <Card
        key={key}
        icon={icon}
        img={img}
        textA={textA}
        a={a}
        textDes={textDes}
      />
    ) : null;
  };

  return (
    <section className="projects-content">
      <section className="projects-content__cards">
        {DataProyect.map((data) => {
          return filterCard(data); // Filtrar y renderizar proyectos
        })}
      </section>
    </section>
  );
}
