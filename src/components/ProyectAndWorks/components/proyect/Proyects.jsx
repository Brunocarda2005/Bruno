import "./Proyect.css";
import { DataProyect } from "../../service/dataProyect";
import Card from "../card/Card";

export function Proyect() {
  return (
    <section className="projects-content">
      {DataProyect.Projects.map((data) => {
        return (
          <Card
            key={data.key}
            icon={data.icon}
            img={data.img}
            textA={data.textA}
            a={data.a}
            textDes={data.textDes}
          />
        );
      })}
    </section>
  );
}
