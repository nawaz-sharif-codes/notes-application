import React from "react";
import styles from "../NotesDisplay/NotesDisplay.module.css";

const NotesDisplay = ({ notes }) => {
  if (notes.length == 0) return null;

  return (
    <div className={styles.parentNotesDisplay}>
      {notes.map((note) => (
        <div key={note.id} className={styles.parentNotesDisplay}>
          <div className={styles.notesDisplayCard}>
            <div className={styles.notesHeader}>
                <button className={styles.deleteButton}><i className="fa-solid fa-trash"></i></button>
            </div>
            <span><b>Title :</b> {note.title}</span>
            <span><b>Description :</b> {note.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesDisplay;
