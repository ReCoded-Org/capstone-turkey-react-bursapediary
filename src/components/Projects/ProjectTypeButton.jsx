import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProjectTypeButton({ title }) {
  const [categories, setCategories] = useState('Categories');
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <button
            className="
          dropdown-toggle
          px-6
          py-2.5
          bg-white
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-black hover:shadow-lg
          hover:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {categories}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              />
            </svg>
          </button>
          <ul
            className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton1"
          >
            {title.map((element) => (
              <li key={element}>
                <a
                  onClick={() => setCategories(element)}
                  className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                text-red
                hover:bg-black
                hover:text-white
              "
                  href={`#${element}`}
                >
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

ProjectTypeButton.propTypes = {
  title: PropTypes.node.isRequired,
};
