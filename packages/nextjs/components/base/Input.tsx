import React from "react";

// TODO add control value and validation
// TODO add value in usd if is native currency

// interfance input extends HTMLInputElement
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return <input placeholder={label} className="input input-bordered input-primary w-full max-w-xs" {...props} />;
};
