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

  confirmUpdate = data => {
    this.props.updateData(this.props.id, data);
  };

  render() {
    return (
      <div className="EditableTimer ">
        {this.props.isEditing ? (
          <TimeForm
            {...this.props}
            statu="update"
            switchTo={this.toggleForm}
            handleConfirm={this.confirmUpdate}
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
