import React from "react";

export default function Timer() {
  return (
    <div className="Timer">
      <h2>Timer </h2>
      <p>Mow the lawn</p>
      <span>10:10:20</span>
      <div className="control-paned">
        <i className="fa fa-2x fa-edit" />
        <i className="fa fa-2x fa-trash" />
      </div>
      <div>
        <button className="btn ">Start</button>
      </div>
    </div>
  );
}
