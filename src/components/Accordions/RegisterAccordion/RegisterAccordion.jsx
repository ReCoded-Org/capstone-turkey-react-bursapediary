function RegisterAccordion() {
  return (
    <div
      className="accordion w-2/3 text-left my-10"
      id="accordionExample3"
      data-testid="valid-registerAccordion"
    >
      <div className="flex flex-row justify-start align-center ">
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p
          className="text-2xl font-semibold p-2"
          data-testid="valid-registerAccordionTitle"
        >
          Register
        </p>
      </div>

      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingOne3">
          <button
            className="
            accordion-button
            collapsed
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            font-semibold
            text-base text-[#6A2C70] text-left
            rounded-none
            transition
            focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne3"
            aria-expanded="true"
            aria-controls="collapseOne3"
          >
            Lorem ipsum dolor sit amet 1... ?
          </button>
        </h2>
        <div
          id="collapseOne3"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne3"
          data-bs-parent="#accordionExample3"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingTwo3">
          <button
            className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              font-semibold
              text-base 
              text-[#6A2C70] 
              text-left
              bg-[#FEEEEE]
              rounded-none
              transition
              focus:outline-none
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo3"
            aria-expanded="false"
            aria-controls="collapseTwo3"
          >
            Lorem ipsum dolor sit amet 2... ?
          </button>
        </h2>
        <div
          id="collapseTwo3"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo3"
          data-bs-parent="#accordionExample3"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingThree3">
          <button
            className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              font-semibold
              text-base
              text-[#6A2C70] 
              text-left
              bg-[#FEEEEE]
              rounded-none
              transition
              focus:outline-none
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree3"
            aria-expanded="false"
            aria-controls="collapseThree3"
          >
            Lorem ipsum dolor sit amet 3... ?
          </button>
        </h2>
        <div
          id="collapseThree3"
          className="accordion-collapse collapse show"
          aria-labelledby="headingThree3"
          data-bs-parent="#accordionExample3"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAccordion;
