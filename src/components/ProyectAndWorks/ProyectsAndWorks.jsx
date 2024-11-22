import { Proyect } from "./components/proyect/Proyects";
import Serch from "./components/serch/Serch";
import "./ProyectsAndWorks.css";

export default function ProyectsAndWorks() {
  return (
    <main className="projects" id="projects">
      <Serch />
      <Proyect />
    </main>
  );
}
