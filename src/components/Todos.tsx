import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import CreateTodoForm from "./CreateTodoForm";
import Header from "./Header";
import TodoCard from "./TodoCard/";

import * as api from "../api";

import { Todo, TodoPartial } from "../model/Todo";

type Props = {
  token: string;
  logout: () => void;
};

export default function Todos({ token, logout }: Props) {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const queryClient = useQueryClient();

  const todosQuery = useQuery<Array<Todo>>("todos", () =>
    api.todo.getAll(token)
  );
  const createTodoMutation = useMutation((body: TodoPartial) => api.todo.create(token, body), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const closeCreateTodoForm = () => {
    setIsCreateFormOpen(false);
  };
  const createTodoHandler = async (description: string) => {
    await createTodoMutation.mutateAsync({ description });
    closeCreateTodoForm();
  };
  const openCreateTodoForm = () => {
    setIsCreateFormOpen(true);
  };

  return (
    <>
      <Header
        openCreateTodoForm={openCreateTodoForm}
        goHome={closeCreateTodoForm}
        logout={logout}
      />
      <main>
        {isCreateFormOpen ? (
          <CreateTodoForm createTodoHandler={createTodoHandler} />
        ) : (
          (todosQuery.data ?? []).map((todo) => (
            <TodoCard key={todo.id} todo={todo} token={token} />
          ))
        )}
      </main>
    </>
  );
}
