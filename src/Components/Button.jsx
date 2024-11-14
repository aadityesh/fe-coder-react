import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <>
      <button
        className="border border-black p-2 min-w-[100px] rounded-sm text-textColor bg-btnColor shadow-md"
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
