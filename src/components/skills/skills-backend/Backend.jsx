import SkillsCard from "../skills-card/Skills-card";
import Node from "../../../static/svg/nodejs.svg";
import MYsql from "../../../static/svg/mysql.svg";

export default function Backend() {
  const Card = {
    card: [
      {
        img: Node,
        key: 1,
        stats: "junior",
        des: "Cuanto no sabía que era lo que realmente me gustaba aprendí Node.js para poder descubrir el mundo backend, a día de hoy no estoy tan familiarizado con esta herramienta.",
        alt: "Node.js bruno cardamone vite github",
      },
      {
        img: MYsql,
        key: 3,
        stats: "junior",
        des: "Al igual que con Node.js la aprendí para poder entender el mundo del backend, no estoy tan familiarizado con esta herramienta, pero sigo usándola de vez en cuando",
        alt: "MySql bruno cardamone vite github",
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
