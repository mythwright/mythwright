import React from "react";
import NavLink from "./NavLink";
import NavBrand from "./NavBrand";

import {MdDarkMode} from "react-icons/md";

function NavBar() {
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    localStorage.setItem("theme", theme == "dark" ? "light" : "dark")
    if (theme == "dark") {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <NavBrand to={"/"}/>
            </div>

            {/* <!-- Mobile menu button -->*/}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/inventory"}>Inventory</NavLink>
              <NavLink to={"/mappings"}>Item Mappings</NavLink>
              <NavLink to={"/settings"}>Settings</NavLink>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              {/*<NavNotifications />*/}

              <button
                className="hidden mx-4 text-gray-600 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="toggle theme"
                onClick={toggleTheme}
              >
                {<MdDarkMode className={"w-6 h-6"}/>}
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
