import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import ActionContainer from "./ActionContainer";
import Button from "../Button";
import ContentContainer from "./ContentContainer";
import EditTodoForm from "./EditForm";

import * as api from "../../api";

import { Todo } from "../../model/Todo";

type Props = {
  todo: Todo;
  token: string;
};

export default function TodoCard({ todo, token }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const queryClient = useQueryClient();

  const editTodoMutation = useMutation(
    (todo: Todo) => api.todo.update(token, todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  const deleteTodoMutation = useMutation(
    (id: string) => api.todo.remove(token, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const saveTodoHandler = async (todo: Todo) => {
    await editTodoMutation.mutateAsync(todo);
    setIsEditing(false);
  };
  const cancelEditHandler = () => {
    setIsEditing(false);
  };
  const deleteTodoHandler = () => {
    deleteTodoMutation.mutateAsync(todo.id);
  };
  const initiateEditTodoHandler = () => {
    setIsEditing(true);
  };

  return (
    <section className="max-w-md mx-auto rounded-sm shadow-md overflow-hidden md:max-w-2xl bg-gray-50 m-1.5">
      <div className="flex">
        {isEditing ? (
          <EditTodoForm
            todo={todo}
            saveTodoHandler={saveTodoHandler}
            cancelEditHandler={cancelEditHandler}
          />
        ) : (
          <>
            <ActionContainer>
              <input
                type="checkbox"
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
                onClick={deleteTodoHandler}
              />
            </ActionContainer>
            <ContentContainer>
              <p className="mt-2 text-gray-500">{todo.description}</p>
            </ContentContainer>
            <ActionContainer>
              <Button onClick={initiateEditTodoHandler}>Edit</Button>
            </ActionContainer>
          </>
        )}
      </div>
    </section>
  );
}
