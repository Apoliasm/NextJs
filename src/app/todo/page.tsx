"use client";

import { QueryClient, useMutation, useQuery } from "react-query";
import { getTodos, createTodo } from "../actions/todo-actions";
import { useState } from "react";
import { todo } from "node:test";
import { error } from "console";
import { queryClient } from "../config/ReactQueryProvider";

export default function TodoPage() {
  const [todoInput, setTodoInput] = useState("");
  const todosQuery = useQuery({
    //캐싱에 사용되는 key값
    queryKey: ["todos"],
    //실제 데이터를 가져오는 함수
    queryFn: () => getTodos(),
  });
  //mutation은 데이터를 변경하는 함수
  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (todoInput === "") throw new Error("할 일을 입력해주세요");
      return createTodo(todoInput);
    },
    onSuccess: (TODOS) => {
      console.log("성공!");
      console.log(TODOS);
      // todosQuery.refetch();

      //todosQuery를 다시 불러오는 것이 아니라, queryClient를 통해 todos를 다시 불러옴
      //todos라는 키값으로 저장된 데이터를 다시 불러옴
      queryClient.invalidateQueries("todos");
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });
  return (
    <div>
      <h1>Todo Page</h1>
      {/* <TodoForm /> */}
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={() => createTodoMutation.mutate()}>
        {createTodoMutation.isLoading ? "Loading..." : "Todo 생성됨"}
      </button>

      {/* <TodoList /> */}
      {todosQuery.isLoading && <div>Loading...</div>}
      {todosQuery.data &&
        todosQuery.data.map((todo, index) => <div key={index}>{todo}</div>)}
    </div>
  );
}
