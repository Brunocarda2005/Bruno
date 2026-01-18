import UseSuggestions from "../../hooks/UseSuggestions";
import "./Serch.css";
import { Seeker } from "./components/seeker/Seeker";
import Suggestions from "./components/suggestion/Suggestion";

export default function Serch() {
  const { updateTagStatus, tags } = UseSuggestions();

  const handleTagDeactivate = (id) => {
    updateTagStatus(id, false);
  };

  const handleTagActivate = (id) => {
    updateTagStatus(id, true);
  };

  return (
    <main className="buscador">
      <Seeker handleTagClickAc={handleTagActivate} tags={tags} />
      <Suggestions handleTagClick={handleTagDeactivate} tags={tags} />
    </main>
  );
}
