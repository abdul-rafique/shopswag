import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState();

  const listItems = [
    { item: "Home", link: "/" },
    { item: "Intro", link: "/intro" },
    { item: "Features", link: "/features" },
    { item: "Details", link: "/details" },
  ];
  const dropDownItems = [
    { item: "Article Details", link: "/article-details" },
    { item: "Terms Conditions", link: "/terms-conditions" },
    { item: "Privacy Policy", link: "/privacy-policy" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 2) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    });
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-20 px-4 pt-2 pb-2 bg-white ${
        scrollPosition
          ? "lg:shadow lg:pt-2 lg:bg-white"
          : "lg:shadow-none lg:pt-7 lg:bg-transparent"
      } shadow transition-all duration-200`}
    >
      <div className="max-w-full container mx-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5">
          <img
            src={process.env.PUBLIC_URL + "assets/shop.png"}
            alt="logo"
            className="w-10"
          />
          <span className="text-2xl font-bold text-primary">Name</span>
        </Link>

        <div className="fixed top-14 bottom-0 inset-x-0 lg:static flex flex-col lg:flex-row lg:items-center gap-5 px-5 bg-white lg:bg-transparent">
          <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
            {listItems.map((el) => (
              <li key={el.item.toLowerCase()}>
                <NavLink
                  to={el.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold"
                      : "text-primary font-semibold transition-colors hover:text-accent"
                  }
                >
                  {el.item}
                </NavLink>
              </li>
            ))}
            <li className="relative group">
              <button
                type="button"
                className="group flex items-center gap-1 text-primary font-semibold transition-colors group-hover:text-accent"
              >
                <span>Drop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <title>ionicons-v5-b</title>
                  <path
                    d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z"
                    className="fill-primary group-hover:fill-accent transition-colors"
                  />
                </svg>
              </button>
              <div className="origin-top-right absolute left-0 pt-2 bg-transparent hidden group-hover:block">
                <ul className="py-2 min-w-max bg-white shadow-md rounded-lg">
                  {dropDownItems.map((el) => (
                    <li key={el.item.toLowerCase()}>
                      <Link
                        to={el.link}
                        className="block px-5 py-1.5 text-primary font-semibold transition-colors hover:text-accent"
                      >
                        {el.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          <Link
            to="/"
            className="px-5 py-1 rounded-full font-semibold bg-primary text-white border border-transparent hover:bg-transparent hover:text-primary hover:border-primary transition-colors"
          >
            Start Selling
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
