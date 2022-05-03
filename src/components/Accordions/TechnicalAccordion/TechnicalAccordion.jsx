import { useTranslation } from 'react-i18next';

function TechnicalAccordion() {
  const { t } = useTranslation();
  return (
    <div
      className="accordion w-2/3 text-left mt-10"
      id="accordionExample2"
      data-testid="valid-technicalAccordion"
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
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <p
          className="text-2xl font-semibold p-2"
          data-testid="valid-technicalAccordionTitle"
        >
          {t('accordions.technical.title')}
        </p>
      </div>

      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingTwo">
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
            data-bs-target="#collapseOne1"
            aria-expanded="true"
            aria-controls="collapseOne1"
          >
            {t('accordions.technical.q1')}
          </button>
        </h2>
        <div
          id="collapseOne1"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample2"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            {t('accordions.technical.a1')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalAccordion;
