import React, { Component } from "react";
import TimeForm from "./TimeForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
  state = {
    isEditing: false,
    title: "Title",
    project: "Project"
  };

  switchTo = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  updateData = data => {
    this.setState({
      ...data,
      isEditing: false
    });
  };

  render() {
    return (
      <div className="EditableTimer ">
        {this.state.isEditing ? (
          <TimeForm
            {...this.state}
            switchTo={this.switchTo}
            updateData={this.updateData}
          />
        ) : (
          <Timer {...this.state} switchTo={this.switchTo} />
        )}
      </div>
    );
  }
}
