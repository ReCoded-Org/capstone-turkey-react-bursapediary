import { useTranslation } from 'react-i18next';

function RegisterAccordion() {
  const { t } = useTranslation();
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
          {t('accordions.register.title')}
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
            {t('accordions.register.q1')}
          </button>
        </h2>
        <div
          id="collapseOne3"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne3"
          data-bs-parent="#accordionExample3"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            {t('accordions.register.a1')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAccordion;
