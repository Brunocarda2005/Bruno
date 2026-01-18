import { useState, useMemo } from "react";
import { CardData } from "../static/const/dataSkills";
import Context from "./Context";

// Estado inicial separado para mejor mantenimiento
const skill = CardData.find((item) => item.id === 15);

const INITIAL_STATE = {
  skills: {
    description: skill.des,
    level: skill.stats,
    img: skill.img,
    alt: skill.alt,
    companies: skill.empresa,
  },
  tags: [],
  selectedProject: null,
};

export default function ContextProvider({ children }) {
  const [globalState, setGlobalState] = useState(INITIAL_STATE);

  // Memoizar el valor del contexto para evitar renders innecesarios
  const contextValue = useMemo(
    () => ({
      globalState,
      setGlobalState,
    }),
    [globalState],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
