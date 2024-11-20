import { useEffect, useState } from "react";
import "./Serch.css";
import { Seeker } from "./components/seeker/Seeker";
import Suggestions from "./components/suggestion/suggestion";
import UseSuggestions from "./hooks/UseSuggestions";

export default function Serch() {
  const { suggestionsActive } = UseSuggestions();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(suggestionsActive);
  }, [suggestionsActive]);

  const changeActive = (id, boolean) => {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, active: boolean } : tag))
    );
  };

  const handleTagClick = (id) => {
    changeActive(id, false);
  };

  return (
    <main className="buscador">
      <Seeker />
      <Suggestions tags={tags} handleTagClick={handleTagClick} />
    </main>
  );
}
