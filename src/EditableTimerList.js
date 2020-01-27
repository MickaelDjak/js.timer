import React from "react";
import EditableTimer from "./EditableTimer";

export default function EditableTimerList(props) {
  return (
    <div className="EditableTimerList ">
      {props.timers.map(timer => {
        return (
          <EditableTimer
            key={timer.id}
            {...timer}
            updateData={props.updateData}
            switchTo={props.switchTo}
            delete={props.delete}
          />
        );
      })}
    </div>
  );
}
