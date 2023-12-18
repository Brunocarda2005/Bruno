import Css from "../../../static/svg/css.svg";
import Javascript from "../../../static/svg/js.svg";
import React from "../../../static/svg/react.svg";
import Html from "../../../static/svg/html.svg";
import NextJs from "../../../static/svg/next-js.svg";
import Tailwind from "../../../static/svg/tailwindcss.svg";
import TypeScript from "../../../static/svg/typescript.svg"
import SkillsCard from "../skills-card/Skills-card";

export default function Frontend() {
  const Card = {
    card: [
      {
        img: Javascript,
        key: 1,
        stats: "Intermediate",
        des: "Esta fue una de las primeras herramientas que aprendí, tengo 2 años que llevo aprendiendo este lenguaje, es mi lenguaje favorito sin duda",
        alt: "javascript bruno cardamone vite github",
      },
        {
        img: TypeScript,
        key: 2,
        stats: "junior",
        des: "Hace muy poco comencé a aprender este lenguaje, aunque complejo me resuelve muchos problemas a la larga gracias a su tipado fuerte, la verdad que mi opinión del lenguaje es muy buena aunque le falte un poquito de desarrollo.",
        alt: "TypeScript bruno cardamone vite github",
      },
      {
        img: Css,
        key: 3,
        stats: "Advanced",
        des: "Sin dudas esta es mi herramienta favorita del frontend, creo que crear cosas en CSS es casi terapéutico para mí.",
        alt: "css bruno cardamone vite github",
      },
      {
        img: React,
        key: 4,
        stats: "intermediate",
        des: "Hace casi un año comencé a practicar con React, la cantidad de herramientas que te otorga es increíble, sumado a su baja curva de aprendizaje hace que sea de lo más cómodo para trabajar.",
        alt: "react bruno cardamone vite github",
      },
      {
        img: Html,
        key: 5,
        stats: "Advanced",
        des: "Por supuesto que esta fue la herramienta que aprendí para poder programar en la web, que se puede decir, padre de toda la web, simplemente HTML.",
        alt: "html bruno cardamone vite github",
      },
      {
        img: NextJs,
        key: 6,
        stats: "junior",
        des: "Es la más nueva de todas las herramientas que estoy aprendiendo",
        alt: "NextJs bruno cardamone vite github",
      },
      {
        img: Tailwind,
        key: 7,
        stats: "junior",
        des: "Quise hacer que los componentes fueran únicos y no dependan de nada como un CSS por lo que explore esta herramienta, si bien CSS es genial también es interesante explorar esta forma.",
        alt: "Tailwind bruno cardamone vite github",
      },
    ],
  };

  return (
    <>
      {Card.card.map((data) => {
        return (
          <SkillsCard
            Pattern={data.img}
            key={data.key}
            des={data.des}
            stats={data.stats}
            alt={data.alt}
          />
        );
      })}
    </>
  );
}
