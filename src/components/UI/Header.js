import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Button from "@mui/material/Button";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import classes from './Header.module.css';

const Header = ({ darkModeHandler }) => {
  return (
    <div className={classes.header}>
      <h1>
       Notepad <NoteAddIcon />
      </h1>
      <Button
        onClick={() =>
            darkModeHandler((previousDarkMode) => !previousDarkMode)
        }
      >
        <Brightness4Icon />
      </Button>
    </div>
  );
};

export default Header;
