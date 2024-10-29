import { useState } from "react";
import Context from "./Context";

export default function UseState(params) {
  const [StateGlobal, setStateGlobal] = useState({
    des: "Hace casi un año comencé a practicar con React, la cantidad de herramientas que te otorga es increíble, sumado a su baja curva de aprendizaje hace que sea de lo más cómodo para trabajar.",
    level: "intermediate",
    img: "https://brunocarda2005.github.io/Bruno/assets/react-Fdl7Tblo.svg ",
    alt: "react bruno cardamone skills",
    empresa: [0],
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
