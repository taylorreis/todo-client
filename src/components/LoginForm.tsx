import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function LoginForm({ setIsLoggedIn }: Props) {
  return <div>Hello!</div>
}

export default LoginForm;