import React, { Component } from "react";
import TimeForm from "./TimeForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
  toggleForm = () => {
    this.props.switchTo(this.props.id);
  };

  deleteTimer = () => {
    this.props.delete(this.props.id);
  };

  render() {
    return (
      <div className="EditableTimer ">
        {this.props.isEditing ? (
          <TimeForm
            {...this.props}
            switchTo={this.toggleForm}
            updateData={this.props.updateData}
          />
        ) : (
          <Timer
            {...this.props}
            switchTo={this.toggleForm}
            deleteTimer={this.deleteTimer}
          />
        )}
      </div>
    );
  }
}
