import React, { useState } from "react";
import Button from "./Button";

type Props = {
  createTodoHandler: (description: string) => void;
};

export default function CreateTodoForm({ createTodoHandler }: Props) {
  const [description, setDescription] = useState("");

  const updateTodoDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };
  const createTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createTodoHandler(description);
  };

  return (
    <section className="max-w-md mx-auto rounded-sm shadow-md overflow-hidden md:max-w-2xl bg-gray-50 m-1.5">
      <form className="flex p-4">
        <textarea
          className="flex-1 border-2"
          onChange={updateTodoDescription}
          value={description}
        />
        <Button onClick={createTodo} >
          Save
        </Button>
      </form>
    </section>
  );
}
