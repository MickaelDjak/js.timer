import React, { Component } from "react";
import TimerCreator from "./TimerCreator";
import EditableTimerList from "./EditableTimerList";
const uuidv4 = require("uuid/v4");

/**
 * https://github.com/krishl/fullstack-react
 */
export default class TimersDashboard extends Component {
  serverUrl = "https://6b5bi.sse.codesandbox.io/api/timers";

  state = {
    timers: []
  };

  componentDidMount() {
    setInterval(() => {
      return fetch(this.serverUrl, {
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(serverTimers => {
          this.setState({
            timers: serverTimers
          });
        });
    }, 1000);
  }

  getIndexById(id) {
    return this.state.timers.findIndex(el => el.id === id);
  }

  switchTo = id => {
    const index = this.getIndexById(id);

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
    const index = this.getIndexById(id);

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        { ...this.state.timers[index], ...data, isEditing: false },
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  delete = id => {
    const index = this.getIndexById(id);

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
          id: uuidv4(),
          title: "Title",
          project: "Project",
          isEditing: false,
          elapsed: 0,
          runningSince: null,
          ...data
        }
      ]
    });
  };

  start = id => {
    const index = this.getIndexById(id);

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        { ...this.state.timers[index], runningSince: new Date() },
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  stop = id => {
    const index = this.getIndexById(id);
    const elapsedNow = new Date() - this.state.timers[index].runningSince;

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        {
          ...this.state.timers[index],
          runningSince: null,
          elapsed: this.state.timers[index].elapsed + elapsedNow
        },
        ...this.state.timers.slice(index + 1)
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
          start={this.start}
          stop={this.stop}
        />
        <TimerCreator creat={this.creat} />
      </div>
    );
  }
}
