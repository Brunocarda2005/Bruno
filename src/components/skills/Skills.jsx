import "./Skills.css";
import { CardData } from "./data/data";
import InfoSkill from "./info/Info";
import SkillsCard from "./skills-card/Skills-card";

export default function Skills() {
  return (
    <section className="social" id="skills">
      <aside className="social__content">
        <InfoSkill />
        <section className="social__content__skills">
          <aside className="social__content__skills__cards">
            {CardData.map((data) => {
              return (
                <SkillsCard
                  Pattern={data.img}
                  key={data.key}
                  des={data.des}
                  stats={data.stats}
                  alt={data.alt}
                  empresa={data.empresa}
                />
              );
            })}
          </aside>
        </section>
      </aside>
    </section>
  );
}
