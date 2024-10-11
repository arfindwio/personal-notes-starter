import React from "react";

function NoteAppHeader({}) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="cari catatan ..." />
      </div>
    </div>
  );
}

export default NoteAppHeader;
