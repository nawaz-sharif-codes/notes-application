import React from "react";
import styles from "../NotesDisplay/NotesDisplay.module.css";

const NotesDisplay = ({
  notes,
  onDelete,
  updateId,
  updateForm,
  setUpdateForm,
  onEdit,
  onSave,
  onCancel
}) => {
  if (!notes.length) return null;

  return (
    <div className={styles.parentNotesDisplay}>
      {notes.map((note) => (
        <div key={note.id} className={styles.parentNotesDisplay}>
          {updateId === note.id ? (
            <div className={styles.editNotesDisplayCard}>
              <div className={styles.editInputTextAreaContainer}>
                <input
                  value={updateForm.title}
                  className={styles.editInput}
                  type="text"
                  onChange={(e) =>
                    setUpdateForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
                <textarea
                  value={updateForm.description}
                  className={styles.editTextArea}
                  onChange={(e) => setUpdateForm((prev) =>({
                    ...prev, description: e.target.value,
                  }))}
                ></textarea>
              </div>
              <div className={styles.editIconsContainer}>
                <button
                  onClick={() => onSave()}
                  className={styles.displayCardsButton}
                >
                  <i className="fa-regular fa-bookmark"></i>
                </button>
                <button onClick={() => onCancel()} className={styles.displayCardsButton}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.notesDisplayCard}>
              <div className={styles.notesHeader}>
                <button
                  onClick={() => onDelete(note.id)}
                  className={styles.displayCardsButton}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => onEdit(note)}
                  className={styles.displayCardsButton}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </div>
              <span>
                <b>Title :</b> {note.title}
              </span>
              <span>
                <b>Description :</b> {note.description}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesDisplay;
