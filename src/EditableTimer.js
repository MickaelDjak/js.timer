import React, { Component } from "react";
import TimeForm from "./TimeForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
  state = {
    isEditing: false
  };

  toggleForm = () => {
    this.setState(({ isEditing }) => {
      return {
        isEditing: !isEditing
      };
    });
  };

  deleteTimer = () => {
    this.props.delete(this.props.id);
  };

  stopTimer = () => {
    this.props.stop(this.props.id);
  };

  startTimer = () => {
    this.props.start(this.props.id);
  };

  confirmUpdate = data => {
    this.toggleForm();
    this.props.updateData(this.props.id, data);
  };

  render() {
    return (
      <div className="EditableTimer ">
        {this.state.isEditing ? (
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
            stopTimer={this.stopTimer}
            startTimer={this.startTimer}
          />
        )}
      </div>
    );
  }
}
