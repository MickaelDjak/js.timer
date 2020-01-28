import React from "react";

export default function Timer(props) {
  return (
    <div className="Timer">
      <div className="Timer-panel">
        <div className="Timer-name-panel">
          <h2>{props.title}</h2>
          <p>{props.project}</p>
        </div>
        <div className="Timer-control-panel">
          <i className="fa fa-edit" onClick={props.switchTo} />
          <i className="fa fa-trash" onClick={props.deleteTimer} />
        </div>
      </div>
      <span className="Timer-clock">10:10:20</span>

      <div>
        <button className="btn ">Start</button>
      </div>
    </div>
  );
}
