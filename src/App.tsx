import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import LoginForm from "./components/Login";
import Todos from "./components/Todos";

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState<string | undefined>();

  const setLoginToken = (token: string) => setToken(token);
  const clearLoginToken = () => setToken(undefined);

  if (token != null) {
    return (
      <QueryClientProvider client={queryClient}>
        <Todos token={token} logout={clearLoginToken} />
      </QueryClientProvider>
    );
  }

  return (
    <LoginForm
      setLoginToken={setLoginToken}
      clearLoginToken={clearLoginToken}
    />
  );
}

export default App;
