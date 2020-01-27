import React, { Component } from "react";

export default class TimeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      project: props.project
    };
  }

  confirmUpdate = () => {
    this.props.updateData(this.props.id, {
      title: this.state.title,
      project: this.state.project
    });
  };

  updateField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="TimeForm">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Your title"
          name="title"
          onChange={this.updateField}
          value={this.state.title}
        />
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          placeholder="Your project"
          name="project"
          onChange={this.updateField}
          value={this.state.project}
        />
        <div>
          <button className="btn btn-db btn-well" onClick={this.confirmUpdate}>
            Update
          </button>
          <button
            className="btn btn-db btn-cancel"
            onClick={this.props.switchTo}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
