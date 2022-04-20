import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';

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
    setIsShow(!isShow);
  }

  return (
    <header>
      <nav
        className="navbar navbar-expand-md shadow-md py-2 bg-bgmain relative flex items-center w-full justify-between mb-5"
        data-testid="valid-navigation"
      >
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center ">
            <a
              href="#home"
              // to={HOME_ROUTE}
              className="flex items-center py-2 lgnav:px-4"
            >
              <img
                src="https://user-images.githubusercontent.com/60944453/162048684-bbbe43f3-cd5b-4e93-908f-825ac7166ed1.PNG"
                alt="Logo"
                className="w-14  smnav:top-3 smnav:right-4 smnav:absolute smnav:w-11 xsnav:top-4 xsnav:right-4 xsnav:w-10 xsnav:absolute"
              />
            </a>
            <button
              className="navbar-toggler border-0 py-3 lgnav:hidden mdnav:hidden  leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2 smnav:relative smnav:right-0"
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
            <ul className="navbar-nav mr-auto items-center lgnav:flex lgnav:flex-row mdnav:flex mdnav:flex-row ">
              <li className="nav-item">
                <a
                  href="#home"
                  /* to={HOME_ROUTE} */
                  className="nav-link block pr-2 lgnav:px-2 py-2 text-primary font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-gray-100 xsnav:bg-gray-100"
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
                  className="nav-link block pr-2 lgnav:px-2 py-2 text-primary  font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-secondary xsnav:bg-secondary"
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
                  className="nav-link block pr-2 lgnav:px-2 py-2 text-primary   font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-gray-100  xsnav:bg-gray-100"
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
                  className="nav-link block pr-2 lgnav:px-2 py-2 text-primary  font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-secondary xsnav:bg-secondary"
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
                  className="nav-link block pr-2 lgnav:px-2 py-2 text-primary   font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-gray-100  xsnav:bg-gray-100"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav lgnav:flex lgnav:flex-row flex flex-nowrap mdnav:flex-row smnav:flex-row ml-1 smnav:mt-6 xsnav:mt-6 smnav:justify-center xsnav:justify-center">
              <li className="nav-item mb-2 pr-2 lgnav:mb-0">
                {isShow && (
                  <button
                    /* to={SIGN_UP_ROUTE} */
                    className="nav-link block pl-2 pr-2 lgnav:px-2 py-2 font-semibold hover:text-primary hover:shadow-xl transition duration-150 ease-in-out text-black rounded border border-black xsnav:text-sm "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="button"
                  >
                    Sign Up
                  </button>
                )}
              </li>
              <li className="nav-item mb-2 lgnav:mb-0 pr-2">
                {isShow ? (
                  <button
                    /* to={SIGN_IN_ROUTE} */
                    className="nav-link block pl-2 pr-4 lgnav:px-2 py-2 text-white bg-primary rounded border border-black  font-semibold transition duration-150 ease-in-out hover:shadow-xl xsnav:text-sm "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="button"
                    onClick={handleShowMenu}
                  >
                    Sign In
                  </button>
                ) : (
                  <div className="flex items-center ">
                    <h1 className="pr-4 ">Avatar</h1>
                    <button
                      /* to={SIGN_OUT_ROUTE} */
                      className="nav-link block pl-2 pr-4 lgnav:px-2 py-2 text-white bg-primary rounded border border-black  font-semibold transition duration-150 ease-in-out hover:shadow-xl xsnav:text-sm "
                      type="button"
                      onClick={handleShowMenu}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </li>
              <li className="nav-item lgnav:mb-0 pr-2">
                <AiOutlineGlobal className="w-6 h-6 my-2" />
              </li>
              <li className="nav-item lgnav:mb-0">
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
