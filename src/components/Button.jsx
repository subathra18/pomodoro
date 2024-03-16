import React from "react";

const Button = ({ children, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="btn bg-neutral uppercase font-extrabold"
    >
      {children}
    </button>
  );
};

export default Button;
