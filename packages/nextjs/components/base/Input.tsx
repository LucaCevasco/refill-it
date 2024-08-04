import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

// interfance input extends HTMLInputElement
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className="input border-secondary flex items-center gap-2 w-52">
      <CurrencyDollarIcon className="h-4 w-4" />
      $
      <input type="text" className="bg-transparent" placeholder={label} {...props} />
    </label>
  );
};
