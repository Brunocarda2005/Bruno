import SkillsCard from "../skills-card/Skills-card";
import Figma from "../../../static/svg/figma.svg";
import Git from "../../../static/svg/git.svg";
import Github from "../../../static/svg/github.svg";

export default function UX_UI() {
  const Card = {
    card: [
      {
        img: Figma,
        key: 1,
        stats: "intermediate",
        des: "Esta es una de las herramientas que más uso, hace casi dos años comencé aprenderla y la uso constantemente para darle una vuelta a muchos estilos.",
        alt: "figma bruno cardamone vite github"
      },
      {
        img: Git,
        key: 2,
        stats: "intermediate",
        des: "Indispensable para cualquier proyecto, una de las herramientas más revolucionarias del mercado, comencé hace poco, pero disfruto usarla para mejorar el seguimiento de mis apps.",
        alt: "javascript bruno cardamone vite github"
      },
      {
        img: Github,
        key: 3,
        stats: "intermediate",
        des: "Otra de las herramientas más necesarias de cualquier programador, gracias a GitHub es que podemos ver todo esto",
        alt: "github bruno cardamone vite"
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
