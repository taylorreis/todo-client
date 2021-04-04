import React, { useState } from "react";

type Props = {
  onSubmit: (username: string, password: string) => void;
};

interface Credentials {
  username?: string;
  password?: string;
}

function Form({ onSubmit }: Props) {
  const [creds, setCreds] = useState({} as Credentials);

  const updateCreds = (key: keyof Credentials) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    return setCreds({
      ...creds,
      [key]: value,
    });
  };

  const submitLogin = (
    e: React.FormEvent,
  ) => {
    e.preventDefault();
    const { username, password } = creds;
    if (
      username == null ||
      username.trim().length === 0 ||
      password == null ||
      password.trim().length === 0
    ) {
      return;
    }

    return onSubmit(username, password);
  };

  return (
    <form>
      <div className="p-2">
        <input
          onChange={updateCreds("username")}
          placeholder="username"
          className="w-full border-2 border-gray-300 p-1"
        ></input>
      </div>
      <div className="p-2">
        <input
          type="password"
          onChange={updateCreds("password")}
          placeholder="password"
          className="w-full border-2 border-gray-300 p-1"
        ></input>
      </div>
      <div className="text-center p-2">
        <button onClick={submitLogin} className="rounded-sm p-1.5 bg-gray-200 shadow-md">Submit</button>
      </div>
    </form>
  );
}

export default Form;
