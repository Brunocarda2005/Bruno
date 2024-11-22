import js from "../../../static/svg/js.svg";
import buscador from "../../../static/fotos/buscador.png";
import calculator from "../../../static/fotos/calculator.png";
import game from "../../../static/fotos/game.png";
import stats from "../../../static/fotos/stats.png";
import React from "../../../static/svg/react.svg";
import eccomers from "../../../static/fotos/ecommerce-frontend-alpha-eight.vercel.app_.png";
import testMeli from "../../../static/fotos/testmeli.onrender.com_.png";
import sqlServer from "../../../static/svg/SqlServer.svg";
import window from "../../../static/fotos/window.png";
import next from "../../../static/svg/next-js.svg";
import cycle from "../../../static/fotos/cycleWeb.jpg";
import angular from "../../../static/svg/angular.svg";

export const DataProyect = [
  {
    icon: angular,
    img: cycle,
    tags: [
      {
        id: 13,
        color: "#512BD4 ",
        nombre: "ASP.Net",
        active: true,
      },
      {
        id: 15,
        color: "#dd1b16",
        nombre: "Angular",
        active: true,
      },
      {
        id: 2,
        color: "#3178C6",
        nombre: "TypeScript",
        active: true,
      },
    ],
    key: 8,
    detail: {
      titulo: "Cycle RPA",
      descripcion:
        "Cycle RPA es una empresa orientada a la automatización de servicios y herramientas, en ella trabaje durante un año como desarrollador Fullstack, mis logros que son más destacables fueron modularizar el css a través de variables, clases predefinidas que simplificaban los estilos según la necesidad, reestructurar el type de la mayoría de las variables, enums, interfaces y diversos modelos aplicando un tipado más extremo aprovechando las ventajas de TypeScript y simplificar la forma de consumir las API mejorando la eficiencia.",
      a: "https://www.rpa.cycle.net.co",
    },
  },
  {
    icon: next,
    img: window,
    tags: [
      {
        id: 3,
        color: "#039BE5",
        nombre: "Css",
        active: true,
      },
      {
        id: 6,
        color: "#212121",
        nombre: "NextJs",
        active: true,
      },
    ],
    key: 7,
    detail: {
      titulo: "Copia Windows",
      descripcion:
        "Este proyecto significó mucho para mí porque fue él inició de un proyecto grande donde poder demostrar mis habilidades, es una copia de Windows 11, donde implemente varias funcionalidades aplicando lógica de programación, además comencé a estructurar de mejor manera mis proyectos aprendí sobre la modularización del código, los problemas que resolví fueron la eficiencia del código el manejo adecuado de los estados, la creación de lógica compleja gracias al juego implementado, aprendí sobre estilos y la importancia de variables y puse en práctica todos los conocimientos previos sobre React.",
      a: "https://testmeli.onrender.com/",
    },
  },
  {
    icon: sqlServer,
    img: testMeli,
    tags: [
      {
        id: 12,
        color: "#B71C1C",
        nombre: "SQL Server",
        active: true,
      },
      {
        id: 14,
        color: "#0277BD",
        nombre: "Python",
        active: true,
      },
    ],

    key: 6,
    detail: {
      titulo: "Test Mercado Libre",
      descripcion:
        "Esta es la prueba técnica que realice para Mercado Libre, en ella realice una API que guarda registro de Personas y de Mutantes (personas con un ADN característico), a la hora de obtener la información de la base de datos nos devuelve la cantidad de personas y la cantidad de mutantes, además de un ratio entre ellas, destaco principalmente la lógica de reconocimiento de ADN aplicando lógica algebraica de matrices y la modularización del código, la API es sencilla pero eficaz.",
      a: "https://testmeli.onrender.com/",
    },
  },
  {
    icon: React,
    img: eccomers,
    tags: [
      {
        id: 1,
        color: "#FFD600",
        nombre: "Javascript",
        active: true,
      },
      {
        id: 3,
        color: "#039BE5",
        nombre: "Css",
        active: true,
      },
      {
        id: 5,
        color: "#f06529",
        nombre: "Html",
        active: true,
      },
      {
        id: 4,
        color: "#61dbfb",
        nombre: "React",
        active: true,
      },
    ],

    key: 5,
    detail: {
      titulo: "Test ARWeb",
      descripcion:
        "Esta es la prueba técnica que realicé junto a mis compañeros para ARWeb. Es un Ecommers simple, destaco el trabajo en grupo, y la forma en que se modifican los productos utilizando lógica de listas.",
      a: "https://ecommerce-frontend-alpha-eight.vercel.app/",
    },
  },
  {
    icon: js,
    img: game,
    tags: [
      {
        id: 1,
        color: "#FFD600",
        nombre: "Javascript",
        active: true,
      },
      {
        id: 3,
        color: "#039BE5",
        nombre: "Css",
        active: true,
      },
      {
        id: 5,
        color: "#f06529",
        nombre: "Html",
        active: true,
      },
    ],
    key: 1,
    detail: {
      titulo: "Pidra Papel o Tijera",
      descripcion:
        "Es un juego simple donde al principio de mi trayectoria puse en práctica mis conocimientos de JavaScript. Destaco la lógica del juego y el código simple.",
      a: "https://brunocarda2005.github.io/Game-paper-scissors-rock/",
    },
  },
  {
    icon: js,
    img: calculator,
    tags: [
      {
        id: 1,
        color: "#FFD600",
        nombre: "Javascript",
        active: true,
      },
      {
        id: 3,
        color: "#039BE5",
        nombre: "Css",
        active: true,
      },
      {
        id: 5,
        color: "#f06529",
        nombre: "Html",
        active: true,
      },
    ],
    key: 2,
    detail: {
      titulo: "Calculadora",
      descripcion:
        "Fue una de las primeras aplicaciones que realicé, me parece una forma muy buena de mejorar la lógica en JavaScript y entrenar tu forma de ver los proyectos como tareas simples a resolver, de manera que en su conjunto logres realizar tareas mucho más grandes.",
      a: "https://brunocarda2005.github.io/calculator/",
    },
  },
  {
    icon: js,
    img: buscador,
    tags: [
      {
        id: 1,
        color: "#FFD600",
        nombre: "Javascript",
        active: true,
      },
      {
        id: 3,
        color: "#039BE5",
        nombre: "Css",
        active: true,
      },
      {
        id: 5,
        color: "#f06529",
        nombre: "Html",
        active: true,
      },
    ],

    key: 3,
    detail: {
      titulo: "Search country",
      descripcion:
        "Esta aplicación fue muy interesante para entender la forma en la que se consumen las API de manera real. Destaco la forma en consumir la API, ya que el proyecto se basa en ello, me gustó mucho como parte de mis proyectos iniciales y aprendí bastante en el proceso.",
      a: "https://brunocarda2005.github.io/frontend-mentor-api-countries/",
    },
  },
  {
    icon: js,
    img: stats,
    tags: [
      {
        id: 1,
        color: "#FFD600",
        nombre: "Javascript",
        active: true,
      },
      {
        id: 3,
        color: "#039BE5",
        nombre: "Css",
        active: true,
      },
      {
        id: 5,
        color: "#f06529",
        nombre: "Html",
        active: true,
      },
    ],

    key: 4,
    detail: {
      titulo: "Aplicacion de Estadisticas",
      descripcion:
        "Esta es una aplicación muy interesante donde combiné mis conocimientos de estilos con los conocimientos en JavaScript. Es una aplicación simple, pero creo que tiene un estilo muy bonito donde se le aplica una lógica simple y estática para realizar los cambios necesarios.",
      a: "https://brunocarda2005.github.io/project-frontend-mentor-2-JSON/",
    },
  },
];
