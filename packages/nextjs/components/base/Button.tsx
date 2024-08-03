import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="bg-primary">{children}</button>;
};

export default Button;
