import React from "react";
import classes from './Search.module.css';

const Search = ({ searchNoteHandler }) => {
  return (
    <div className={classes.form__group}>
        <input type="text" className={classes.form__input} id="name" placeholder="Search your note" required=""  onChange={(event) => searchNoteHandler(event.target.value)} />
        <label className={classes.form__label}>Search your note</label>
    </div>
  );
};

export default Search;
