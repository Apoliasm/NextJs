"use server";

var TODOS: string[] = [];

export const getTodos = async () => {
  return TODOS;
};

export const createTodo = async (data: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  TODOS.push(data);
  return TODOS;
};
