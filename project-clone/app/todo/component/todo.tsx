"use client";

import { Checkbox, IconButton, Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "actions/todo/todo-actions";
import { queryClient } from "../../../config /ReactQueryClientProvider";
import { useState } from "react";

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);
  const [createdDate, setCreatedDate] = useState<string>(
    new Date(todo.created_at).toLocaleTimeString()
  );
  const [updatedDate, setUpdatedDate] = useState<string>(
    new Date(todo.updated_at).toLocaleTimeString()
  );
  const [completedDate, setCompletedDate] = useState<string | null>(
    new Date(todo.completed_at).toLocaleTimeString()
  );

  const updateTodoMutation = useMutation({
    mutationFn: () =>
      updateTodo({
        id: todo.id,
        title,
        completed,
        completed_at: new Date().toISOString(),
      }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return (
    <div className="w-full flex items-center gap-1">
      <Checkbox
        checked={completed}
        onChange={async (e) => {
          setCompletedDate(new Date().toLocaleTimeString());
          await setCompleted(e.target.checked);
          await updateTodoMutation.mutate();
        }}
      />

      {isEditing ? (
        <input
          className="flex-1 border-b-black border-b pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <div className="flex flex-1 flex-col gap-1">
          <p className={`${completed && "line-through"}`}>{title}</p>
          {completed ? (
            <p className=" text-gray-500 text-sm">
              {" "}
              completed: {completedDate}{" "}
            </p>
          ) : (
            <div>
              <p className=" text-gray-500 text-sm">created : {createdDate}</p>
              <p className="text-gray-500 text-sm">updated : {updatedDate}</p>
            </div>
          )}
        </div>
      )}

      {isEditing ? (
        <IconButton
          onClick={async () => {
            await updateTodoMutation.mutate();
          }}
        >
          {updateTodoMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-check" />
          )}
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </IconButton>
      )}
      <IconButton onClick={() => deleteTodoMutation.mutate()}>
        {deleteTodoMutation.isPending ? (
          <Spinner />
        ) : (
          <i className="fas fa-trash" />
        )}
      </IconButton>
    </div>
  );
}
