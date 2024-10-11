import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={createdAt} body={body} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
    </div>
  );
}

export default NoteItem;
