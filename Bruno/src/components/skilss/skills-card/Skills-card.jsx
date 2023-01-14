import { useEffect, useState } from "react";

export default function SkillsCard({
  Link,
  Pattern,
  Years,
  Level,
  transform,
  pass,
}) {
  const [animacion, setAnimacion] = useState("");

  useEffect(() => {
    if (pass === true) setAnimacion(transform);
  }, [pass]);

  return (
    <>
      <div className={`skills-frontend-content-card ${animacion}`}>
        <img
          src={Pattern}
          alt=""
          className="skills-frontend-content-card-img"
        />
        <div className="skills-frontend-content-card-info">
          <p>
            Experiencia : <b>{Years}</b> (Years)
          </p>
          <span className="level js"></span>
          <a href={Link}>Ver proyectos</a>
        </div>
      </div>
    </>
  );
}
