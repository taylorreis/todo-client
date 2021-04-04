import React from "react";

import Button from "./Button";

type Props = {
  openCreateTodoForm: () => void;
  goHome: () => void;
  logout: () => void;
};

export default function Header({ openCreateTodoForm, goHome, logout }: Props) {
  return (
    <header className="grid grid-cols-3 p-4 bg-gray-50 border-b-2">
      <h1
        className="col-start-2 justify-self-center underline font-medium text-2xl cursor-pointer"
        onClick={goHome}
      >
        Todos
      </h1>
      <div className="flex justify-end">
        <div>
          <Button onClick={openCreateTodoForm}>Create Todo</Button>
        </div>
        <div>
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </header>
  );
}
