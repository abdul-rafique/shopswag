import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(null);
  const [showMobMenu, setShowMobMenu] = useState(false);
  const location = useLocation();

  const listItems = [
    { item: "Home", link: "/" },
    { item: "Intro", link: "/home", hash: "intro" },
    { item: "Features", link: "/home", hash: "features" },
    { item: "Details", link: "/home", hash: "details" },
  ];
  const dropDownItems = [
    { item: "Article Details", link: "/article" },
    { item: "Terms Conditions", link: "/terms" },
    { item: "Privacy Policy", link: "/privacy" },
  ];

  const handleMobMenu = () => {
    if (!showMobMenu) {
      setShowMobMenu(true);
    } else {
      setShowMobMenu(false);
    }
  };

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
      <div className="container lg:px-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5">
          <img
            src={process.env.PUBLIC_URL + "assets/shop.png"}
            alt="logo"
            className="w-10 outline-none"
          />
          <span className="text-2xl font-bold text-primary">Name</span>
        </Link>

        <button
          type="button"
          onClick={handleMobMenu}
          className="group px-2 py-1.5 rounded border lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28px"
            height="28px"
          >
            {!showMobMenu ? (
              <path
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
                className="fill-primary"
              />
            ) : (
              <path
                d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
                className="fill-primary"
              />
            )}
          </svg>
        </button>

        <div
          className={`fixed top-14 bottom-0 inset-x-0 lg:static ${
            showMobMenu ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center gap-5 px-5 bg-white lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
            {listItems.map((el) => (
              <li key={el.item.toLowerCase()}>
                <NavLink
                  to={{
                    pathname: el.link,
                    hash: el.hash ? el.hash : null,
                  }}
                  className={({ isActive }) =>
                    el.hash === location.hash
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
              <div className="origin-top-left absolute left-0 pt-2 bg-transparent hidden group-hover:block">
                <ul className="py-2 min-w-max bg-white shadow border rounded-lg">
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
