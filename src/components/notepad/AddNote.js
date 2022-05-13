import React, { useState } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import classes from './NoteList.module.css';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className={`${classes.note} ${classes.new}`}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Create new note here.."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={classes.noteFooter}>
        <small>{characterLimit - noteText.length} left</small>
        <Button className="save" onClick={handleSaveClick}>
          Publish <ArrowUpwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default AddNote;
