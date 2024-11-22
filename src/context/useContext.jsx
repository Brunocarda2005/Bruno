import { useState } from "react";
import Context from "./Context";

export default function UseState(params) {
  const [StateGlobal, setStateGlobal] = useState({
    skills: {
      des: "Lo mejor de mi experiencia con React fue descubrir esta poderosa librería y sumergirme en su enfoque innovador. Me enamoré de la manera en que React gestiona los estados y los contextos, permitiendo un control preciso y eficiente de los datos en las aplicaciones. Además, la programación reactiva transformó mi perspectiva, ofreciéndome una forma fluida y dinámica de desarrollar interfaces interactivas que responden en tiempo real a los cambios del usuario.",
      level: "intermediate",
      img: "https://brunocarda2005.github.io/Bruno/assets/react-V2XtNuWi.svg",
      alt: "react bruno cardamone skills",
      empresa: [0],
    },
    tags: [],
    projects: {},
  });

  return (
    <Context.Provider
      value={{
        StateGlobal,
        setStateGlobal,
      }}
    >
      {params.children}
    </Context.Provider>
  );
}
