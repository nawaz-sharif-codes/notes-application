import React, { useState } from "react";
import styles from "../NotesForm/NotesForm.module.css";
import { notesFormHandler } from "../NotesForm/index";
import NotesDisplay from "../NotesDisplay/NotesDisplay";

const NotesForm = () => {
  const [formInput, setFormInput] = useState("");
  const [formDetails, setFormDetails] = useState("");
  const [notes, setNotes] = useState([]);
  const [updateId, setUpdateId] = useState(null)
  const [updateForm, setUpdateForm] = useState({
    title : '',
    description:''
  })

  const handleDelete = (id) =>{
    setNotes(prevNotes => prevNotes.filter((note) => note.id !== id))
  }

  const editHandler = (note) => {
    setUpdateId(note.id);
    setUpdateForm({
      title : note.title,
      description : note.description
    })
  }

  const saveHandler = () => {
    setNotes(prevNotes => prevNotes.map((note) => 
      note.id == updateId ? {...note, ...updateForm} : note
    ))

    setUpdateId(null)
  }

  const cancelHandler = () => {
    setUpdateId(null)
  }

  return (
    <>
      <div className={styles.parentNotesForm}>
        <h1>Notes Tracker</h1>
        <form
          action=""
          className={styles.notesForm}
          onSubmit={(event) => {
            event.preventDefault();
            const newNote = {
              id: crypto.randomUUID(),
              title: formInput,
              description: formDetails,
              createdAt: new Date().toISOString(),
            };
            setNotes((prevNotes) => [...prevNotes, newNote]);
            setFormInput("");
            setFormDetails("");
          }}
        >
          <input
            type="text"
            placeholder="Whats on your mind today..."
            value={formInput}
            onChange={(event) => setFormInput(event.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="How do you want to tackle it..."
            value={formDetails}
            onChange={(event) => setFormDetails(event.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={() => {
              notesFormHandler(formInput, formDetails);
            }}
            className={styles.notesFormButton}
          >
            Add Note
          </button>
        </form>
      </div>
      <h2>Planned tasks for today</h2>
      <NotesDisplay notes= {notes} onDelete= {handleDelete} 
      updateId = {updateId} updateForm = {updateForm} setUpdateForm = {setUpdateForm}
      onEdit = {editHandler} onSave = {saveHandler} onCancel = {cancelHandler}/>
    </>
  );
};

export default NotesForm;
