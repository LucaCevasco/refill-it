import React from "react";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  label: string;
  options: string[];
}

export const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <select className="select select-primary w-52" {...props}>
      <option disabled selected>
        {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
