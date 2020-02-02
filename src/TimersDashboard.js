import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import TimerCreator from "./TimerCreator";
import EditableTimerList from "./EditableTimerList";
import * as client from "./client";

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
      return client.getTimers(serverTimers => {
        this.setState({
          timers: serverTimers
        });
      });
    }, 1000);
  }

  getIndexById(id) {
    return this.state.timers.findIndex(el => el.id === id);
  }

  update = (id, data) => {
    const index = this.getIndexById(id);

    const updatedTimer = {
      ...this.state.timers[index],
      ...data
    };

    client.updateTimer(updatedTimer);

    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        updatedTimer,
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  delete = id => {
    const index = this.getIndexById(id);

    client.deleteTimer(id);
    this.setState({
      timers: [
        ...this.state.timers.slice(0, index),
        ...this.state.timers.slice(index + 1)
      ]
    });
  };

  creat = data => {
    const timer = {
      id: uuidv4(),
      title: "Title",
      project: "Project",
      isEditing: false,
      elapsed: 0,
      runningSince: null,
      ...data
    };

    client.createTimer(timer);

    this.setState({
      timers: [...this.state.timers, timer]
    });
  };

  start = id => {
    client.startTimer(id);
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

    client.stopTimer(id, elapsedNow);

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
          delete={this.delete}
          start={this.start}
          stop={this.stop}
        />
        <TimerCreator creat={this.creat} />
      </div>
    );
  }
}
