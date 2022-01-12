import React, { Component } from "react";
import Note from "./noteBase";
import TextareaAutosize from "react-textarea-autosize";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      value: "",
      title: "",
      notesList: [],
    };
    this.printText = this.printText.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  valueChange(e) {
    this.setState({ value: e.target.value });
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  printText() {
    if (!this.state.value) {
      return;
    }
    const inputVal = this.state.value;
    const inputTitle = this.state.title;
    const inputDate = new Date().toString();
    this.state.notesList.push({
      text: inputVal,
      date: inputDate,
      title: inputTitle,
    });
    this.setState({ key: Math.random() });
  }

  deleteEvent = (index) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const copyPost = Object.assign([], this.state.notesList);
      copyPost.splice(index, 1);
      this.setState({
        notesList: copyPost,
      });
    }
  };

  render() {
    const note =
      this.state.notesList.map((element, index) => {
        return (
          <Note
            key={index}
            text={element.text}
            date={element.date}
            title={element.title}
            delete={this.deleteEvent.bind(this, index)}
          />
        );
      })
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="m-4 display-4">Note Maker</h1>

        <div className="d-flex flex-column w-50 border border-secondary p-5 shadow rounded-3">
          <TextareaAutosize
            className="form-label m-2"
            onChange={this.titleChange}
            type="text"
            style={{ resize: "none" }}
          ></TextareaAutosize>

          <TextareaAutosize
            className="form-label m-2"
            onChange={this.valueChange}
            style={{ resize: "none" }}

          ></TextareaAutosize>

          <button className="btn btn-warning m-2" onClick={this.printText}>
            Print
          </button>
        </div>

        <ul className="list-group" key={this.state.key}>
          {note}
        </ul>
      </div>
    );
  }
}
