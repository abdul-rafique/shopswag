import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
function SupportCard({ icon }) {
  return (
    <div className="lg:max-w-xs">
      <div className="px-8 mb-5 border-l border-accent">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-light">
          {icon}
        </div>
      </div>

      <div className="px-8">
        <h3 className="text-2xl font-semibold mb-3">
          Interdum Consectetur Libero Id Faucibus
        </h3>
        <p className="mb-5 text-white/80">
          Nisl purus in mollis nunc sed id uta liquam purus sit amet luctus
          venena tis justo donec enim diam lorem
        </p>
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span>Learn more</span> <FaLongArrowAltRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
}

export default SupportCard;
