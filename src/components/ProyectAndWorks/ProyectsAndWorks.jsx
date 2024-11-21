import { useState } from "react";
import { Proyect } from "./components/proyect/Proyects";
import Serch from "./components/serch/Serch";
import "./ProyectsAndWorks.css";

export default function ProyectsAndWorks() {
  const [tags, setTags] = useState([]);

  return (
    <main className="projects" id="projects">
      <Serch tags={tags} setTags={setTags} />
      <Proyect tags={tags} />
    </main>
  );
}
