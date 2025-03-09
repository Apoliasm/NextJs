"use client";

import { Button, Input } from "@material-tailwind/react";
import Todo from "./component/todo";
export default function UI() {
  return (
    <div className="w-2/3 mx-auto flex flex-col py-10 gap-2 items-center">
      <div className="text-xl text-center">Todo Main</div>
      <Input className="w-full" variant="outlined" placeholder="Add a todo" />
      <Todo />
      <Button className="align-middle bg-black px-3 rounded-lg">
        <i className="fas fa-plus mr-2 text-white" />
        Add Todo
      </Button>
    </div>
  );
}
