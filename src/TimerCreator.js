import React, { Component } from "react";
import TimeForm from "./TimeForm";

export default class TimerCreator extends Component {
  state = {
    isButton: true
  };

  switchTo = () => {
    this.setState({ isButton: !this.state.isButton });
  };

  confirmUpdate = data => {
    this.props.creat(data);
    this.switchTo();
  };

  render() {
    return (
      <div className="TimerCreator">
        {this.state.isButton ? (
          <button className="btn btn-create" onClick={this.switchTo}>
            Create timer
          </button>
        ) : (
          <TimeForm
            statu="create"
            switchTo={this.switchTo}
            handleConfirm={this.confirmUpdate}
          />
        )}
      </div>
    );
  }
}
