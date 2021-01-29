import React, { PropsWithChildren } from "react";

export default function ActionContainer({
  children,
}: PropsWithChildren<object>) {
  return <div className="flex flex-col justify-center p-4">{children}</div>;
}
