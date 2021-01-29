import React, { PropsWithChildren } from "react";

export default function Button({ children, ...props }: PropsWithChildren<any>) {
  return (
    <button className="bg-gray-100 p-2 shadow-md" {...props}>
      {children}
    </button>
  );
}
