import React from "react";
import TimeForm from "./TimeForm";
import Timer from "./Timer";

export default function EditableTimer() {
  return (
    <div className="EditableTimer ">
      <Timer />
      <TimeForm />
    </div>
  );
}
