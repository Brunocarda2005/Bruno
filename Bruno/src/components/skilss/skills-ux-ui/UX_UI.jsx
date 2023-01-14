import SkillsCard from "../skills-card/Skills-card";
import Figma from "../../static/fotos/pattern_figma.png";
import Git from "../../static/fotos/pattern_git.png";
import Github from "../../static/fotos/pattern_github.png";

export default function UX_UI() {
  return (
    <>
      <SkillsCard
        Years={"3"}
        Pattern={Figma}
        Link={"a casa puta"}
        Level={9}
        transform={"Left"}
      />
      <SkillsCard
        Years={"1"}
        Pattern={Git}
        Link={"a casa puta"}
        Level={9}
        transform={"Left"}
      />
      <SkillsCard
        Years={"+3"}
        Pattern={Github}
        Link={"a casa puta"}
        Level={9}
        transform={"Left"}
      />
    </>
  );
}
