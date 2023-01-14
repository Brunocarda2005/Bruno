import { FaPaintBrush } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import "./services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <aside className="services-contenedor_text">
        <div>
          <h5>SERVICES</h5>
          <p>These are the services I offer</p>
        </div>
        <div className="services-contenedor_text-ilustration"></div>
      </aside>
      <aside className="services-contenedor-cards">
        <div id="front-end" className="services-contenedor-cards-card">
          <div>
            <h6>Front-end</h6>
            <span id="front-end">
              {" "}
              <FaPaintBrush className="services-contenedor-cards-card-icon" />
            </span>
          </div>
          <p>I mainly specialize in the frontend area of web development.</p>
        </div>
        <div id="ui-ux" className="services-contenedor-cards-card">
          <div>
            <h6>UI/UX</h6>
            <span id="uiux">
              {" "}
              <FaCog className="services-contenedor-cards-card-icon" />
            </span>
          </div>
          <p>
            I develop environments suitable for anyone with different abilities
            and intuitive environments.
          </p>
        </div>
        <div id="back-end" className="services-contenedor-cards-card">
          <div>
            <h6>Back-end</h6>
            <span id="backend">
              {" "}
              <FaDatabase className="services-contenedor-cards-card-icon" />
            </span>
          </div>
          <p>I can develop the backend part of not very complex websites.</p>
        </div>
      </aside>
    </section>
  );
}
