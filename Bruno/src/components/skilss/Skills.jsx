import { useRef } from "react";
import styled from "styled-components";
import Frontend from "./skills-frontend/Frontend";
import UX_UI from "./skills-ux-ui/UX_UI";
import Backend from "./skills-backend/Backend";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import "./Skills.css";

const Slice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
`;

const Skills = () => {
  const CarrucelFunction = useRef(null);

  const next = () => {
    if (CarrucelFunction.current.children.length > 0) {
      const primerElemento = CarrucelFunction.current.children[0];

      CarrucelFunction.current.style.transition = `.3s ease-out all`;

      const tamañoSlice = CarrucelFunction.current.offsetWidth;

      CarrucelFunction.current.style.transform = `translateX(-${tamañoSlice}px)`;

      const transition = () => {
        CarrucelFunction.current.style.transition = `none`;
        CarrucelFunction.current.style.transform = `translateX(0)`;
        CarrucelFunction.current.appendChild(primerElemento);
        CarrucelFunction.current.removeEventListener("transitionend" , transition)
      };

      CarrucelFunction.current.addEventListener("transitionend", transition);
    }
  };

  const pass = () => {
    if (CarrucelFunction.current.children.length > 0) {
      const index = CarrucelFunction.current.children.length - 1;
      const ultimoElemento = CarrucelFunction.current.children[index];

      CarrucelFunction.current.insertBefore(
        ultimoElemento,
        CarrucelFunction.current.firstChild
      );

      const tamañoSlice = CarrucelFunction.current.offsetWidth;
      CarrucelFunction.current.style.transition = `none`;
      CarrucelFunction.current.style.transform = `translateX(-${tamañoSlice}px)`;

      setTimeout(() => {
        CarrucelFunction.current.style.transition = `.3s ease-out all`;
        CarrucelFunction.current.style.transform = `translateX(0)`;
      }, 1);
    }
  };

  return (
    <>
      <section className="skills" id="skills">
        <h3>These are my skills</h3>
        <aside className="skills-content-aside">
          <div className="skills-content" ref={CarrucelFunction}>
            <Slice>
              <div className="skills-content-frontend">
                <Frontend />
              </div>
            </Slice>
            <Slice>
              <div className="skills-content-UI_UX">
                <UX_UI />
              </div>
            </Slice>
            <Slice>
              <div className="skills-content-backend">
                <Backend />
              </div>
            </Slice>
          </div>
          <section className="skills-content-button">
            <button className="skills-content-button-pass" onClick={pass}>
              <FaAngleLeft />
            </button>
            <button className="skills-content-button-next" onClick={next}>
              <FaAngleRight />
            </button>
          </section>
        </aside>
      </section>
    </>
  );
};

export default Skills;
