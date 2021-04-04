import React, { useState } from "react";

import { login } from "../../api/auth";

import Form from "./Form";

type Props = {
  setLoginToken: (token: string) => void;
  clearLoginToken: () => void;
};

function Login({ setLoginToken, clearLoginToken }: Props) {
  const [errors, setErrors] = useState<Array<string>>([]);

  const onSubmit = async (username: string, password: string) => {
    try {
      const { access_token } = await login(username, password);
      setLoginToken(access_token);
    } catch (error) {
      const errorMessage = error.message ?? "Failed to login.";
      setErrors([...errors, errorMessage]);
      clearLoginToken();
    }
  };

  const removeError = (index: number) => () => {
    setErrors([...errors.slice(0, index), ...errors.slice(index + 1)]);
  };

  return (
    <section className="max-w-sm mx-auto rounded-sm shadow-md bg-gray-200 p-2 mt-10">
      <h1 className="text-center underline">Todos Login</h1>
      <Form onSubmit={onSubmit} />
      {errors.map((error, i) => (
        <div
          onClick={removeError(i)}
          key={i}
          className="text-center text-sm cursor-pointer m-1 text-red-400"
        >
          <span>{error}</span>
        </div>
      ))}
    </section>
  );
}

export default Login;
