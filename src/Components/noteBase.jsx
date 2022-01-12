import React, { Component } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default class Note extends Component {
  state = {
    openModal: false
  };

  onClickNote = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
    console.log("test")
  };

  render() {
    return (
      <>
        <li
          className="list-group-item m-4 shadow rounded-3"
          onClick={this.onClickNote}
        >
          <div className="fw-bold">{this.props.title}</div>
          <div className="p-2 fst-italic">{this.props.text}</div>
          <div className="p-2 text-decoration-underline">{this.props.date}</div>
          <button className="btn btn-danger m-2" onClick={this.props.delete}>
            Delete
          </button>
        </li>

        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          <div className="p-3">
            <h3>{this.props.title}</h3>
            <h5 className="fst-italic">{this.props.text}</h5>
            <p>{this.props.date}</p>
          </div>
        </Modal>
      </>
    );
  }
}
