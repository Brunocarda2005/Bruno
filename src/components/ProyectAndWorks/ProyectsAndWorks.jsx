import Card from "./card/Card";
import js from "../../static/svg/js.svg";
import buscador from "../../static/fotos/buscador.png";
import calculator from "../../static/fotos/calculator.png";
import game from "../../static/fotos/game.png";
import stats from "../../static/fotos/stats.png";
import "./ProyectsAndWorks.css";

export default function ProyectsAndWorks() {
  // quiero hacer en un futuro que cada seccion este diferenciada en backend frontend y ux-ui usare las cartas para hacer eso por lo que quedan
  // relegadas a ese puesto y no como nav ya que presentan ciertos errores de ux-ui para ser nav

  const JSON = {
    Projects: [
      {
        icon: js,
        img: game,
        tags: [],
        a: "https://brunocarda2005.github.io/Game-paper-scissors-rock/",
        key: 2,
      },
      {
        icon: js,
        img: calculator,
        tags: [],
        a: "https://brunocarda2005.github.io/calculator/",
        key: 4,
      },
      {
        icon: js,
        img: buscador,
        tags: [],
        a: "https://brunocarda2005.github.io/frontend-mentor-api-countries/",
        key: 5,
      },
      {
        icon: js,
        img: stats,
        tags: [],
        a: "https://brunocarda2005.github.io/project-frontend-mentor-2-JSON/",
        key: 6,
      },
    ],
  };

  return (
    <main className="projects" id="projects">
      <div className="projects-content">
        {JSON.Projects.map((data) => {
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
      </div>
    </main>
  );
}
