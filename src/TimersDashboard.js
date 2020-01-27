import React from "react";
import TimerCreator from "./TimerCreator";
import EditableTimerList from "./EditableTimerList";

export default function TimersDashboard() {
  return (
    <div className="TimersDashboard">
      <h1>Timers bashboard</h1>
      <EditableTimerList />
      <TimerCreator />
    </div>
  );
}
