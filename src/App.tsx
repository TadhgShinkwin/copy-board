import { useState, useEffect } from "react";
import "./App.css";
import { Board } from "./components/board/board.component";
import { Input } from "./components/input/input.component";
//import { Data } from "./sampleData";
import { v4 as uuidv4 } from "uuid";

type Note = {
  id: string;
  text: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const updateNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const retrieveNotes = () => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  };

  const addNote = (text: string) => {
    const newNote = {
      id: uuidv4(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: string) => {
    console.log(`Deleting note: ${id}`);
    setNotes(notes.filter((note) => note.id !== id));
    if (notes.length === 1) {
      localStorage.removeItem("notes");
    }
  };

  useEffect(() => {
    retrieveNotes();
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      updateNotes();
    }
  }, [notes]);

  return (
    <>
      <h1>Copy Board</h1>
      <Input saveNote={addNote} />
      <Board cards={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;
