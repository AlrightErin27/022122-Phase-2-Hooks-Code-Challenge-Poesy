import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [isHid, setIsHid] = useState(false);
  const [newPoem, setNewPoem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then(setPoems)
      .catch((err) => ("ERROR", err));
  }, []);
  //console.log(poems);

  function handleClick() {
    console.log("CLICKED");
    setIsHid(!isHid);
  }

  function handleNewEntry(freshEntry) {
    console.log("NEW ", freshEntry.title);
    let obj = {
      title: freshEntry.title,
      author: freshEntry.author,
      content: freshEntry.content,
    };
    setPoems([...poems, obj]);

    fetch(`http://localhost:3000/poems`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ poem: obj }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  console.log(poems);
  ///
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {!isHid ? (
          <NewPoemForm newPoem={newPoem} handleNewEntry={handleNewEntry} />
        ) : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
