import "./Proyect.css";
import { DataProyect } from "../../service/dataProyect";
import Card from "../card/Card";
import ProyectDetail from "../proyectDetail/ProyectDetail";
import UseProyect from "../../hooks/UseProyect";
import UseSuggestions from "../../hooks/UseSuggestions";
import { useMemo } from "react";
import { useTranslation } from "../../../../utils/useTranslation";

export function Proyect() {
  const { hasActiveTag, hasNoSelectedProject } = UseProyect();
  const { tags } = UseSuggestions();
  const { t } = useTranslation();

  // Memoizar la lista de proyectos filtrados para evitar cálculos innecesarios
  const filteredProjects = useMemo(() => {
    return DataProyect.filter((project) => hasActiveTag(project.tags, tags));
  }, [tags, hasActiveTag]);

  return (
    <section className="projects-content">
      <section className="projects-content__cards">
        {hasNoSelectedProject ? (
          filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card key={project.key} data={project} />
            ))
          ) : (
            <div className="projects-content__no-results">
              <p>{t("projects.noResults")}</p>
            </div>
          )
        ) : (
          <ProyectDetail />
        )}
      </section>
    </section>
  );
}
