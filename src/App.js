import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/UI/Header";
import Search from './components/UI/Search';
import NoteList from './components/notepad/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Brnyrr!!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "Noted",
      date: "21/04/2022",
    },
    {
      id: nanoid(),
      text: "Eat Healthy Diet!",
      date: "28/04/2022",
    },
    {
      id: nanoid(),
      text: "Wake!",
      date: "30/04/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notepad"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("notepad", JSON.stringify(notes));
    }, 1000);
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"} main`}>
      <div className="container">
         <Header darkModeHandler={setDarkMode} />
         <Search searchNoteHandler={setSearchText} />
         <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
