import React from "react";
import TimerCreator from "./TimerCreator";
import EditableTimerList from "./EditableTimerList";
import "./styles.css";

export default function TimersDashboard() {
  return (
    <div className="TimersDashboard">
      <h1>TimersDashboard</h1>
      <EditableTimerList />
      <TimerCreator />
    </div>
  );
}
