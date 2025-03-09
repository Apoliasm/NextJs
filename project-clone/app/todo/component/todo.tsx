"use client";

import { Checkbox, IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
export default function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("Sth To do");
  const [completed, setCompleted] = useState(false);
  return (
    <div className="flex items-center w-full gap-1">
      <Checkbox
        checked={completed}
        onChange={() => setCompleted(!completed)}
        onClick={() => setCompleted(!completed)}
      />
      {isEditing ? (
        <input
          className="flex-1 py-1"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Edit todo"
        />
      ) : (
        <p className={`flex-1 ${completed ? "line-through" : ""}`}> {value}</p>
      )}

      <IconButton onClick={() => setIsEditing(!isEditing)}>
        <i className="fas fa-pen" />
      </IconButton>
      <IconButton>
        <i className="fas fa-trash" />
      </IconButton>
    </div>
  );
}
