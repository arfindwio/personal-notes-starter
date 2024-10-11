import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes, addNote, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <NoteInput addNote={addNote} />
      </div>
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      {notes.length > 0 ? <NotesList notes={archiveNotes} onDelete={onDelete} onActive={onActive} /> : <p className="notes-list__empty-message">Tidak Ada Catatan</p>}
    </div>
  );
}

export default NoteAppBody;
