import { useEffect } from "react";
import "./Serch.css";
import { Seeker } from "./components/seeker/Seeker";
import Suggestions from "./components/suggestion/suggestion";
import UseSuggestions from "./hooks/UseSuggestions";

export default function Serch(params) {
  const { tags, setTags } = params;
  const { suggestionsActive } = UseSuggestions();

  useEffect(() => {
    setTags(suggestionsActive);
  }, [suggestionsActive]);

  const changeActive = (id, boolean) => {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, active: boolean } : tag))
    );
  };

  const handleTagClickDes = (id) => {
    changeActive(id, false);
    console.log(id);
  };

  const handleTagClickAc = (id) => {
    changeActive(id, true);
    console.log(id);
  };

  return (
    <main className="buscador">
      <Seeker handleTagClickAc={handleTagClickAc} />
      <Suggestions tags={tags} handleTagClick={handleTagClickDes} />
    </main>
  );
}
