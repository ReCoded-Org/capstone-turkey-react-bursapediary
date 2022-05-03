import { useTranslation } from 'react-i18next';

function GeneralAccordion() {
  const { t } = useTranslation();

  return (
    <div
      className="accordion w-2/3 text-left mt-10"
      id="accordionExample"
      data-testid="valid-generalAccordion"
    >
      <div className="flex flex-row justify-start align-center">
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p
          className="text-2xl font-semibold p-2"
          data-testid="valid-generalAccordionTitle"
        >
          {t('accordions.general.title')}
        </p>
      </div>
      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingOne">
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
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {t('accordions.general.q1')}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            {t('accordions.general.a1')}
          </div>
        </div>
      </div>
      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingOne">
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
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {t('accordions.general.q2')}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            {t('accordions.general.a2')}
          </div>
        </div>
      </div>
      <div className="accordion-item bg-[#FEEEEE] border-b-2 border-pink-200">
        <h2 className="accordion-header mb-0" id="headingOne">
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
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {t('accordions.general.q3')}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 bg-[#FEEEEE]">
            {t('accordions.general.a3')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralAccordion;
