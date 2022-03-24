import React, { useState } from "react";

function NewPoemForm({ handleNewEntry }) {
  const [freshEntry, setFreshEntry] = useState({});
  const [title1, setTitle] = useState("");
  const [author1, setAuthor] = useState("");
  const [content1, setContent] = useState("");

  function handleSubmit(e) {
    // console.log(title);
    e.preventDefault();
    setFreshEntry({
      ...freshEntry,
      title: title1,
      author: author1,
      content: content1,
    });
    handleNewEntry(freshEntry);
  }
  console.log(freshEntry);
  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      <textarea
        placeholder="Write your masterpiece here..."
        rows={10}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
