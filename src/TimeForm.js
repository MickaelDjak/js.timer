import React, { Component } from "react";

export default class TimeForm extends Component {
  state = {
    title: "Title",
    project: "Project"
  };

  updateInput = event => {
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
          onChange={this.updateInput}
          value={this.state.title}
        />
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          placeholder="Your project"
          name="project"
          onChange={this.updateInput}
          value={this.state.project}
        />
        <div>
          <button className="btn btn-db btn-well">Update</button>
          <button className="btn btn-db btn-cancel">Cancel</button>
        </div>
      </div>
    );
  }
}
