import React, { useState } from "react";

import ActionContainer from "./ActionContainer";
import Button from "../Button";

import { Todo } from "../../model/Todo";
import ContentContainer from "./ContentContainer";

type Props = {
  todo: Todo;
  saveTodoHandler: (todo: Todo) => Promise<void>;
  cancelEditHandler: () => void;
};

export default function EditTodoForm({
  todo,
  saveTodoHandler,
  cancelEditHandler,
}: Props) {
  const [description, setDescription] = useState(todo.description);

  const updateTodoDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const saveTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    saveTodoHandler({
      ...todo,
      description,
    });
  };
  const cancelEdit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    cancelEditHandler();
  };

  return (
    <>
      <ContentContainer>
        <textarea className="border-2 w-full h-full"
          value={description}
          onChange={updateTodoDescription}
        />
      </ContentContainer>
      <ActionContainer>
        <Button onClick={saveTodo}>Save</Button>
        <Button onClick={cancelEdit}>Cancel</Button>
      </ActionContainer>
    </>
  );
}
