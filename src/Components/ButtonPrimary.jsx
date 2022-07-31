import React from "react";

function ButtonPrimary({ type, text }) {
  if (type === "secondary") {
    return (
      <button
        type="button"
        className="min-w-fit px-4 py-2 md:px-8 md:py-4 rounded-full border border-accent font-semibold bg-transparent text-accent hover:bg-accent hover:text-white hover:border-transparent transition-colors"
      >
        {text}
      </button>
    );
  }
  return <button>{text}</button>;
}

export default ButtonPrimary;
