import React from "react";
import { Link } from "react-router-dom";

function CustomLink({ type, destination, text }) {
  if (type === "secondary") {
    return (
      <Link
        to={destination}
        className="min-w-fit px-4 py-2 md:px-8 md:py-4 rounded-full border border-accent font-semibold bg-transparent text-accent hover:bg-accent hover:text-white hover:border-transparent transition-colors"
      >
        {text}
      </Link>
    );
  }

  return (
    <Link
      to={destination}
      className="min-w-fit px-4 py-2 md:px-8 md:py-4 rounded-full border border-transparent font-semibold bg-accent text-white hover:bg-transparent hover:text-accent hover:border-accent transition-colors"
    >
      {text}
    </Link>
  );
}

export default CustomLink;
