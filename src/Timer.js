import React from "react";

export default function Timer(props) {
  return (
    <div className="Timer">
      <h2>{props.title}</h2>
      <p>{props.project}</p>
      <span>10:10:20</span>
      <div className="control-paned">
        <i className="fa fa-2x fa-edit" onClick={props.switchTo} />
        <i className="fa fa-2x fa-trash" />
      </div>
      <div>
        <button className="btn ">Start</button>
      </div>
    </div>
  );
}
