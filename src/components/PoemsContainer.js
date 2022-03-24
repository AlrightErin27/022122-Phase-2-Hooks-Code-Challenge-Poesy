import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  const renderPoems = poems.map((poem) => {
    return <Poem key={poem.name} poem={poem} />;
  });

  return <div className="poems-container">{renderPoems}</div>;
}

export default PoemsContainer;
