import React from "react";
export function Button({ children, className }) {
  return <button className={className}>{children}</button>;
}