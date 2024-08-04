import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  outlined?: boolean;
  loading?: boolean;
}

const Button = ({ children, onClick, loading, outlined }: ButtonProps) => {
  const containedClasses = `bg-gradient-to-r from-primary to-secondary
       text-black p-2 px-5 rounded-xl font-semibold w-48 my-2 flex flex-row`;
  const outlinedClasses = `bg-base-100 p-2 px-5 rounded-xl font-semibold w-48 my-2 flex flex-row
      border-2 border-primary hover:bg-base-100 hover:text-primary hover:border-primary`;

  return (
    <button className={outlined ? outlinedClasses : containedClasses} onClick={onClick} disabled={loading}>
      {loading && <span className="loading loading-spinner loading-xs"></span>}
      {children}
    </button>
  );
};

export default Button;
