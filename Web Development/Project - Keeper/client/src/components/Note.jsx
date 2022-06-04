import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const handleSubmit = (e) => {
    props.deleteNote(props.id);
    e.preventDefault();
  };

  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleSubmit}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
