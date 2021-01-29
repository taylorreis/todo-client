import React, { useState } from "react";

type Props = {
  createTodoHandler: (description: string) => void;
};

export default function CreateTodoForm({ createTodoHandler }: Props) {
  const [description, setDescription] = useState("");

  const updateTodoDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const createTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createTodoHandler(description);
  };

  return (
    <form className="flex m-4">
      <input
        className="flex-1"
        onChange={updateTodoDescription}
        value={description}
      />
      <button className="bg-gray-50 shadow-md p-2" onClick={createTodo}>
        Save
      </button>
    </form>
  );
}
