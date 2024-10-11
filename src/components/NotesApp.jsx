import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import NoteInput from "./NoteInput";
import NoteList from "./NotesList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(new Date()),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: true } : note)),
      };
    });
  }

  onActiveHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: false } : note)),
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader />
        <NoteAppBody notes={this.state.notes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
      </div>
    );
  }
}

export default NotesApp;
