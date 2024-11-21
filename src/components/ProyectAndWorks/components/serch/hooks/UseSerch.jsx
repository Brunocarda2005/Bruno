import { useState } from "react";
import { DataProyect } from "../../../service/dataProyect";

export default function UseSerch() {
  const [suggestionsActive, SetSuggestionsActive] = useState([]);

  DataProyect.map((proyect) => {
    const { tags } = proyect;

    tags.map((tag) => {
      const tagExist = suggestionsActive.find(
        (suggestion) => suggestion.id === tag.id
      );

      if (!tagExist) {
        SetSuggestionsActive([...suggestionsActive, tag]);
      }
    });
  });

  return {
    suggestionsActive,
    SetSuggestionsActive,
  };
}
