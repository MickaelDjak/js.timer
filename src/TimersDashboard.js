import React, { Component } from "react";
import TimerCreator from "./TimerCreator";
import EditableTimerList from "./EditableTimerList";

export default class TimersDashboard extends Component {
  state = {
    timers: [
      {
        id: 0,
        title: "Title",
        project: "Project",
        isEditing: true
      },
      {
        id: 1,
        title: "Test",
        project: "Project number 2",
        isEditing: false
      }
    ]
  };

  switchTo = id => {
    let index = this.state.timers.findIndex(el => el.id === id);

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        {
          ...this.state.timers[index],
          isEditing: !this.state.timers[index].isEditing
        },
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  update = (id, data) => {
    let index = this.state.timers.findIndex(el => el.id === id);

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        { ...this.state.timers[index], ...data, isEditing: false },
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  delete = id => {
    let index = this.state.timers.findIndex(el => el.id === id);

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  creat = data => {
    this.setState({
      timers: [
        ...this.state.timers,
        {
          id: this.state.timers.length,
          title: "Title",
          project: "Project",
          isEditing: false,
          ...data
        }
      ]
    });
  };

  render() {
    return (
      <div className="TimersDashboard">
        <h1>Timers bashboard</h1>
        <EditableTimerList
          timers={this.state.timers}
          updateData={this.update}
          switchTo={this.switchTo}
          delete={this.delete}
        />
        <TimerCreator creat={this.creat} />
      </div>
    );
  }
}
