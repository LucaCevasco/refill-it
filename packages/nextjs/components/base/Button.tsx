import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  outlined?: boolean;
}

// TODO use animation
// TODO use tailwind variants util
const Button = ({ children, onClick, outlined }: ButtonProps) => {
  const containedClasses = `bg-gradient-to-r from-primary to-secondary
       text-black p-2 px-5 rounded-xl font-semibold w-48 my-2 flex flex-row`;
  const outlinedClasses = `bg-base-100 p-2 px-5 rounded-xl font-semibold w-48 my-2 flex flex-row
      border-2 border-primary hover:bg-base-100 hover:text-primary hover:border-primary`;

  return (
    <button className={outlined ? outlinedClasses : containedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
