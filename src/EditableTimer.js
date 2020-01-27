import React from "react";
import TimeForm from "./TimeForm";
import Timer from "./Timer";
import "./styles.css";

export default function EditableTimer() {
  return (
    <div className="EditableTimer ">
      <h1>EditableTimer </h1>
      <TimeForm />
      <Timer />
    </div>
  );
}
