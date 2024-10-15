import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      searchInput: "",
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState({ searchInput: event.target.value }, () => {
      return this.props.onSearch(this.state);
    });
  }

  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value={this.state.searchInput} onChange={this.onSearchChangeEventHandler} />
      </div>
    );
  }
}

export default NoteSearch;
