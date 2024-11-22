import UseSuggestions from "../../hooks/UseSuggestions";
import "./Serch.css";
import { Seeker } from "./components/seeker/Seeker";
import Suggestions from "./components/suggestion/Suggestion";

export default function Serch() {
  const { saveTags, contextTags } = UseSuggestions();

  const changeActive = (id, boolean) => {
    saveTags(
      contextTags.map((tag) =>
        tag.id === id ? { ...tag, active: boolean } : tag
      )
    );
  };

  const handleTagClickDes = (id) => {
    changeActive(id, false);
  };

  const handleTagClickAc = (id) => {
    changeActive(id, true);
  };

  return (
    <main className="buscador">
      <Seeker handleTagClickAc={handleTagClickAc} />
      <Suggestions handleTagClick={handleTagClickDes} />
    </main>
  );
}
