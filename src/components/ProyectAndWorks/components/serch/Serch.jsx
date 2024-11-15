import { useState } from "react";
import "./Serch.css";
import { Seeker } from "./components/seeker/Seeker";
import Suggestions from "./components/suggestion/suggestion";

export default function Serch() {
  const [tags, setTags] = useState([
    {
      id: 1,
      nombre: "Js",
      color: "#FFD600",
      state: true,
    },
  ]);

  const handleTagClick = (id) => {
    // Actualiza el estado generando un nuevo array
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, state: false } : tag))
    );
  };

  return (
    <main className="buscador">
      <Seeker />
      <Suggestions tags={tags} handleTagClick={handleTagClick} />
    </main>
  );
}
