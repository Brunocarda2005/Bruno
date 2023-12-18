import { useState } from "react";
import Context from "./Context";

export default function UseState(params) {
  const [StateGlobal, setStateGlobal] = useState({
    des: "me vale pito",
    level: 'intermediate',
    img: "/src/static/svg/react.svg",
    alt: "react bruno cardamone skills"
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
