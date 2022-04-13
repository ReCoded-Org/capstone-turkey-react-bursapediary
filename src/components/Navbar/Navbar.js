import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import LanguageDropdown from './LanguageDropdown';
/* import { Link } from 'react-router-dom';
import {
  HOME_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  PROJECT_ROUTE,
  FAQ_ROUTE,
} from '../routes'; */

function Navbar() {
  const [isShow, setIsShow] = useState(true);

  function handleShowMenu() {
    setIsShow(false);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md shadow-md py-2 bg-white relative flex items-center w-full justify-between mb-5">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center ">
            <button
              className="navbar-toggler border-0 py-3 lg:hidden md:hidden  leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2 sm:relative sm:right-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                />
              </svg>
            </button>
          </div>
          <div
            className="navbar-collapse collapse grow items-center "
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto items-center lg:flex lg:flex-row md:flex md:flex-row ">
              <li className="nav-item">
                <a
                  href="#home"
                  // to={HOME_ROUTE}
                  className="flex items-center py-2 lg:px-4"
                >
                  <img
                    src="https://user-images.githubusercontent.com/60944453/162048684-bbbe43f3-cd5b-4e93-908f-825ac7166ed1.PNG"
                    alt="Logo"
                    className="w-14 sm:top-4 sm:right-4 sm:fixed sm:w-11 xs:top-4 xs:right-4 xs:w-10 xs:fixed"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#home"
                  /* to={HOME_ROUTE} */
                  className="nav-link block pr-2 lg:px-2 py-2 text-purple-800 font-semibold hover:text-purple-600 transition duration-150 ease-in-out sm:text-center xs:text-center sm:bg-gray-100  xs:bg-gray-100"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  /*  to={PROJECT_ROUTE} */
                  href="#home"
                  className="nav-link block pr-2 lg:px-2 py-2 text-purple-800  font-semibold hover:text-purple-600 transition duration-150 ease-in-out sm:text-center xs:text-center sm:bg-gray-200 xs:bg-gray-200"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  /* to={FAQ_ROUTE} */
                  href="#home"
                  className="nav-link block pr-2 lg:px-2 py-2 text-purple-800   font-semibold hover:text-purple-600 transition duration-150 ease-in-out sm:text-center xs:text-center sm:bg-gray-100  xs:bg-gray-100"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item ">
                <a
                  /*  to={PROJECT_ROUTE} */
                  href="#home"
                  className="nav-link block pr-2 lg:px-2 py-2 text-purple-800  font-semibold hover:text-purple-600 transition duration-150 ease-in-out sm:text-center xs:text-center sm:bg-gray-200 xs:bg-gray-200"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  /* to={CONTACT_ROUTE} */
                  href="#!"
                  className="nav-link block pr-2 lg:px-2 py-2 text-purple-800   font-semibold hover:text-purple-600 transition duration-150 ease-in-out sm:text-center xs:text-center sm:bg-gray-100  xs:bg-gray-100"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav lg:flex lg:flex-row flex flex-nowrap md:flex-row sm:flex-row ml-2 sm:mt-6 xs:mt-6 sm:justify-center xs:justify-center">
              <li className="nav-item mb-2 pr-2 lg:mb-0">
                {isShow && (
                  <button
                    /* to={SIGN_UP_ROUTE} */
                    className="nav-link block pl-2 pr-2 lg:px-2 py-2 font-semibold hover:text-purple-800 hover:shadow-xl transition duration-150 ease-in-out text-black rounded border border-black xs:text-sm "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="button"
                  >
                    Sign Up
                  </button>
                )}
              </li>
              <li className="nav-item mb-2 lg:mb-0 pr-2">
                {isShow ? (
                  <button
                    /* to={SIGN_IN_ROUTE} */
                    className="nav-link block pl-2 pr-4 lg:px-2 py-2 text-white bg-purple-800 rounded border border-black  font-semibold transition duration-150 ease-in-out hover:shadow-xl xs:text-sm "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="button"
                    onClick={handleShowMenu}
                  >
                    Sign In
                  </button>
                ) : (
                  <h1 className="flex items-center mt-2.5">Avatar</h1>
                )}
              </li>
              <li className="nav-item lg:mb-0 pr-2">
                <AiOutlineGlobal className="w-6 h-6 my-2" />
              </li>
              <li className="nav-item lg:mb-0">
                <LanguageDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
