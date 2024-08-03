import React from "react";

export const Select = ({ label, options }: { label: string; options: string[] }) => {
  return (
    <select className="select select-primary w-48">
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
