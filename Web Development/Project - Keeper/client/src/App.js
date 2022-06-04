import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./utils/notes";

const createNotes = (note) => {
  return <Note key={note.key} title={note.title} content={note.content} />;
};

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
