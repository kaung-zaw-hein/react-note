import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import classes from './NoteList.module.css';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className={classes.note}>
      <span>{text}</span>
      <div className={classes.noteFooter}>
        <small>{date}</small>
        <Button onClick={() => handleDeleteNote(id)}>
          <DeleteOutlineIcon className="delete-icon" size="1.3em" />
        </Button>
      </div>
    </div>
  );
};

export default Note;
