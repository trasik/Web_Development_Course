import React, { useState } from "react";
import CreateNoteArea from "./components/CreateNoteArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const createNotes = (note, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  };

  return (
    <div className="App">
      <Header />
      <CreateNoteArea onAdd={addNote} />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
