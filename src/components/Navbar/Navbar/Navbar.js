import { AiOutlineGlobal, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import {
  HOME_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  PROJECT_ROUTE,
  FAQ_ROUTE,
} from '../../../routes';

import { logout } from '../../../features/user/userAPI';
import AddProjectModal from '../../AddProjectModal/AddProjectModal';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  const signOut = () => {
    logout(dispatch);
    navigate(HOME_ROUTE);
  };

  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-md shadow-md py-2 bg-bgmain relative flex items-center w-full justify-between mb-5"
          data-testid="valid-navigation"
        >
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center ">
              <Link
                to={HOME_ROUTE}
                className="flex items-center py-2 lgnav:px-4"
              >
                <img
                  src="https://user-images.githubusercontent.com/60944453/162048684-bbbe43f3-cd5b-4e93-908f-825ac7166ed1.PNG"
                  alt="Logo"
                  className="w-14  smnav:top-3 smnav:right-4 smnav:absolute smnav:w-11 xsnav:top-4 xsnav:right-4 xsnav:w-10 xsnav:absolute"
                />
              </Link>
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
                  <Link
                    to={HOME_ROUTE}
                    className="nav-link block pr-2 lgnav:px-2 py-2 text-primary font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-gray-100 xsnav:bg-gray-100"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={PROJECT_ROUTE}
                    className="nav-link block pr-2 lgnav:px-2 py-2 text-primary  font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-secondary xsnav:bg-secondary"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={FAQ_ROUTE}
                    className="nav-link block pr-2 lgnav:px-2 py-2 text-primary   font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-gray-100  xsnav:bg-gray-100"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to={ABOUT_ROUTE}
                    className="nav-link block pr-2 lgnav:px-2 py-2 text-primary  font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-secondary xsnav:bg-secondary"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={CONTACT_ROUTE}
                    className="nav-link block pr-2 lgnav:px-2 py-2 text-primary   font-semibold hover:text-primaryHover transition duration-150 ease-in-out smnav:text-center xsnav:text-center smnav:bg-gray-100  xsnav:bg-gray-100"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Contact
                  </Link>
                </li>
                {user ? (
                  <li className="nav-item">
                    <button
                      type="button"
                      className="flex gap gap-1 nav-link block pl-2 pr-4 lgnav:px-2 py-2 text-white bg-primary rounded border border-black  font-semibold transition duration-150 ease-in-out hover:shadow-2xl hover:scale-110 xsnav:text-sm "
                      data-bs-toggle="modal"
                      data-bs-target="#ModalCenter"
                    >
                      Add Project
                      <AiOutlinePlus size={23} />
                    </button>
                  </li>
                ) : null}
              </ul>
              <ul className="navbar-nav lgnav:flex lgnav:flex-row flex flex-nowrap mdnav:flex-row smnav:flex-row ml-1 smnav:mt-6 xsnav:mt-6 smnav:justify-center xsnav:justify-center">
                {user ? (
                  <li className="nav-item mb-2 pr-2 lgnav:mb-0">
                    <div className="flex items-center ">
                      <h1 className="pr-4 text-primary font-bold">
                        {user.username}
                      </h1>
                      <button
                        className="nav-link block pl-2 pr-4 lgnav:px-2 py-2 text-white bg-primary rounded border border-black  font-semibold transition duration-150 ease-in-out hover:shadow-xl xsnav:text-sm "
                        type="button"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </button>
                    </div>
                  </li>
                ) : (
                  <div className="flex items-center ">
                    <li className="nav-item mb-2 lgnav:mb-0 pr-2">
                      <Link to={SIGN_UP_ROUTE}>
                        <button
                          className="nav-link block pl-2 pr-2 lgnav:px-2 py-2 font-semibold hover:text-primary hover:shadow-xl transition duration-150 ease-in-out text-black rounded border border-black xsnav:text-sm "
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          type="button"
                        >
                          Sign Up
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item mb-2 lgnav:mb-0 pr-2">
                      <Link to={SIGN_IN_ROUTE}>
                        <button
                          className="nav-link block pl-2 pr-4 lgnav:px-2 py-2 text-white bg-primary rounded border border-black  font-semibold transition duration-150 ease-in-out hover:shadow-xl xsnav:text-sm "
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          type="button"
                        >
                          Sign In
                        </button>
                      </Link>
                    </li>
                  </div>
                )}

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
      <AddProjectModal />
    </div>
  );
}

export default Navbar;
