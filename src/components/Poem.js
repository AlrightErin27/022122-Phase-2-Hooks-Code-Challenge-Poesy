import React, { useState } from "react";

function Poem({ poem }) {
  const [notClicked, setNotClicked] = useState(true);
  function handleClick() {
    setNotClicked(!notClicked);
  }

  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- {poem.author}</strong>
      </p>
      <button onClick={handleClick}>
        {!notClicked ? "MARK AS RED" : "NOT READ"}
      </button>
    </div>
  );
}

export default Poem;
