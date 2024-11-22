import "./Skills-card.css";
import { useContext } from "react";
import Context from "../../../context/Context";

export default function SkillsCard(params) {
  const { Pattern, des, stats, alt, empresa } = params;
  const { setStateGlobal } = useContext(Context);

  const SaveData = () => {
    setStateGlobal((lastData) => ({
      ...lastData,
      skills: {
        des: des,
        level: stats,
        img: Pattern,
        alt: alt,
        empresa: empresa,
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
