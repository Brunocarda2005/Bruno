import "./Skills-card.css";
import { useContext } from "react";
import Context from "../../../context/Context";

export default function SkillsCard(params) {
  const { Pattern, des, stats, alt, companies } = params;
  const { setGlobalState } = useContext(Context);

  const SaveData = () => {
    setGlobalState((prevState) => ({
      ...prevState,
      skills: {
        description: des,
        level: stats,
        img: Pattern,
        alt: alt,
        companies: companies,
      },
    }));
  };

  return (
    <>
      <div className="skills-frontend-content-card" onClick={SaveData}>
        <img
          src={Pattern}
          alt={Pattern}
          className="skills-frontend-content-card-img"
        />
      </div>
    </>
  );
}
