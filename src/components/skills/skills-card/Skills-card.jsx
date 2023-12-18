import "./Skills-card.css";
import { useContext } from "react";
import Context from "../../../context/Context";

export default function SkillsCard({ Pattern, des, stats, alt }) {
  const { setStateGlobal } = useContext(Context);

  const SaveData = (e) => {
    let data = e.target.innerText.split("|");
    setStateGlobal({
      des: data[0],
      level: data[1],
      img: data[2],
      alt: data[3],
    });
  };

  return (
    <>
      <div className="skills-frontend-content-card" onClick={SaveData}>
        <img
          src={Pattern}
          alt={Pattern}
          className="skills-frontend-content-card-img"
        />
        <span className="skills-frontend-content-card-span">
          {`${des} | ${stats} | ${Pattern} | ${alt}`}
        </span>
      </div>
    </>
  );
}
