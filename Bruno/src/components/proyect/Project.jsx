import Card from "./card-proyect/Card";
import js from "../static/svg/js.svg";
import react from "../static/svg/react.svg";
import "../static/css/Card_p_w.css";

const JSON = {
  Projects: [
    {
      img: react,
      textA: "Visita el codigo fuente",
      textDes:
        "Este proyecto es mi portafolio en donde use react para poder entrenar mas mis habilidades con esta tecnologia, aqui podras ver todos mis trabajos y proyectos ademas de mis habilidades en distintas areas, logicamente tambien podras contratarme a traves de distintos medios como mis redes sociales o un formulario",
      textCalendar: " 01 / 10 / 2022 - 08 / 11 / 2022",
      key: 1,
    },
    {
      img: js,
      textA: "Visita este proyecto",
      textDes:
        "En este proyecto desarrolle un juego de piedras papel y tijeras en donde pude aprender mucho sobre javascript y logica de la programacion.",
      textCalendar: "10 / 10 / 2022 - 14 / 10 / 2022",
      key: 2,
    },
    {
      img: react,
      textA: "Visita este proyecto",
      textDes:
        "Este proyecto fue principalmente para demostrar mis habilidades en react haciendo una tipica lista de tareas.",
      textCalendar: "14 / 10 / 2022 - 16 / 10 / 2022",
      key: 3,
    },
    {
      img: react,
      textA: "Visita este proyecto",
      textDes:
        "En esta ocacion utilice react para poder crear una calculadora, aprendi bastante sobre el uso de los estados y otros componentes interesantes en react",
      textCalendar: "20 / 9 / 2022 - 25 / 9 / 2022",
      key: 4,
    },
    {
      img: js,
      textA: "Visita este proyecto",
      textDes:
        "En este proyecto consumi una api para poder entrenar esa parte de mi javascript, lo que hice fue a traves de la api mostrar paises y datos de los mismos, realice un buscador por region y otro por nombre del pais, debo darles grandes reconocimientos a frontend mentor que me sirvio para encontrar inspiracion para este y futuros proyectos",
      textCalendar: "10 / 10 / 2022 - 15 / 10 / 2022",
      key: 5,
    },
    {
      img: js,
      textA: "Visita este proyecto",
      textDes:
        "Este proyecto tambien es de frontend mentor pero esta vez realice una pagina que mostraba los valores de una empresa imaginaria, este proyecto tuvo una fuerte precencia de Json y javascript",
      textCalendar: "10 / 10 / 2022 - 15 / 10 / 2022",
      key: 6,
    },
  ],
};

export default function Project() {
  return (
    <>
      <main>
        <section className="project_work">
          <main className="project_work-main">
            <div className="project_work-main-ilustracion Project"></div>
            <h3>PROJECTS</h3>
          </main>
          <aside className="project_work-cards_project_work">
            <div className="project_work-cards_project_work-text">
              <p>
                Estos son mis proyectos que realicé para demostrar y practicar
                mis habilidades como front-end developer , como podrán ver en el
                marcador se encuentra la tecnología que mas importante fue para
                el proyecto según un criterio personal.
              </p>
            </div>
            <div className="project_work-card_project_work-cards">
              {JSON.Projects.map((data) => {
                return (
                  <Card
                    img={data.img}
                    textA={data.textA}
                    textDes={data.textDes}
                    textCalendar={data.textCalendar}
                    key={data.key}
                  />
                );
              })}
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
