import React, { Dispatch, SetStateAction, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import LoginForm from "./components/LoginForm";
import Todos from "./components/Todos";

const queryClient = new QueryClient();

const getComponent = (
  isLoggedIn: boolean,
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
) => {
  if (isLoggedIn) {
    return (
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    );
  }

  return <LoginForm setIsLoggedIn={setIsLoggedIn} />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return getComponent(isLoggedIn, setIsLoggedIn);
}

export default App;
