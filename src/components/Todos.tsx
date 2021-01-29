import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import CreateTodoForm from "./CreateTodoForm";
import Header from './Header';
import TodoCard from "./TodoCard/";

import * as api from "../api";

import { Todo } from "../model/Todo";

export default function Todos() {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const queryClient = useQueryClient();

  const todosQuery = useQuery<Array<Todo>>("todos", api.todo.getAll);
  const createTodoMutation = useMutation(api.todo.create, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const createTodoHandler = async (description: string) => {
    await createTodoMutation.mutateAsync({ description });
    setIsCreateFormOpen(false);
  };
  const openCreateTodoForm = () => {
    setIsCreateFormOpen(true);
  };

  return (
    <>
      <Header openCreateTodoForm={openCreateTodoForm} />
      <main>
        {isCreateFormOpen ? (
          <CreateTodoForm createTodoHandler={createTodoHandler} />
        ) : (
          (todosQuery.data ?? []).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))
        )}
      </main>
    </>
  );
}
