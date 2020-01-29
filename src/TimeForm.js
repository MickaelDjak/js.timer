import React, { Component } from "react";

export default class TimeForm extends Component {
  constructor(props) {
    super(props);

    const { title = "new title", project = "new project" } = props;

    this.state = {
      title: title,
      project: project
    };
  }

  confirmUpdate = () => {
    this.props.handleConfirm({
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
          <button
            className="btn btn-db btn-update"
            onClick={this.confirmUpdate}
          >
            {this.props.statu === "update" ? "Update" : "Create"}
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
