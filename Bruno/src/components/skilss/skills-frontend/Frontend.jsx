import Bootstrap from "../../static/fotos/pattern_boot.png";
import Sass from "../../static/fotos/pattern_sass.png";
import Css from "../../static/fotos/pattern_css.png";
import Javascript from "../../static/fotos/pattern_js.png";
import React from "../../static/fotos/pattern_react.png";
import Html from "../../static/fotos/pattern_html.png";
import SkillsCard from "../skills-card/Skills-card";

export default function Frontend() {
  return (
    <>
      <SkillsCard
        Years={"3"}
        Pattern={Javascript}
        Link={"a casa puta"}
        Level={9}
        transform={"Javascript"}
      />
      <SkillsCard
        Years={"1"}
        Pattern={React}
        Link={"a casa puta"}
        Level={9}
        transform={"React"}
      />
      <SkillsCard
        Years={"+3"}
        Pattern={Html}
        Link={"a casa puta"}
        Level={9}
        transform={"Html"}
      />
      <SkillsCard
        Years={"+3"}
        Pattern={Css}
        Link={"a casa puta"}
        Level={9}
        transform={"Css"}
      />
      <SkillsCard
        Years={"1"}
        Pattern={Bootstrap}
        Link={"a casa puta"}
        Level={9}
        transform={"Bootstrap"}
      />
      <SkillsCard
        Years={"1"}
        Pattern={Sass}
        Link={"a casa puta"}
        Level={9}
        transform={"Scss"}
      />
    </>
  );
}
