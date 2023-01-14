import SkillsCard from "../skills-card/Skills-card";
import Node from "../../static/fotos/pattern_node.png";
import Python from "../../static/fotos/pattern_py.png";
import MYsql from "../../static/fotos/pattern_Mysql.png";

export default function Backend() {
  return (
    <>
      <SkillsCard
        Years={"3"}
        Pattern={Node}
        Link={"a casa puta"}
        Level={9}
        transform={"Left"}
      />
      <SkillsCard
        Years={"1"}
        Pattern={Python}
        Link={"a casa puta"}
        Level={9}
        transform={"Left"}
      />
      <SkillsCard
        Years={"+3"}
        Pattern={MYsql}
        Link={"a casa puta"}
        Level={9}
        transform={"Left"}
      />
    </>
  );
}
