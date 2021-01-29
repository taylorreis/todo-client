import React, { PropsWithChildren } from "react";

export default function ContentContainer({
  children,
}: PropsWithChildren<object>) {
  return <div className="flex-1 p-8">{children}</div>;
}
