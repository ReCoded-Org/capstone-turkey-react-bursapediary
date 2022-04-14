import GeneralAccordion from '../components/Accordions/GeneralAccordion';
import RegisterAccordion from '../components/Accordions/RegisterAccordion';
import TechnicalAccordion from '../components/Accordions/TechnicalAccordion';

function FaqPage() {
  return (
    <div data-testid="valid-page">
      <div className="flex flex-col items-center justify-center text-center first-letter:gap-4 p-3">
        <p className="font-semibold text-2xl mb-5 text-[#6A2C70]">FAQ</p>
        <p className="font-semibold text-4xl mb-5">
          Frequently Asked Questions
        </p>

        <p className="font-medium text-2xl mb-5">
          We have gathered the most common question we get regarding <br />
          bursaPediary FAQ and it&apos;s features.
        </p>

        <div className="bg-[#FEEEEE] rounded-full flex flex-row justify-start align-center w-1/2">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <input
            placeholder="Search"
            className="min-w-min w-full px-3 py-0.5 text-base font-normal first-line:text-gray-700 bg-[#FEEEEE] rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#FEEEEE] focus:outline-none placeholder:italic"
            aria-label="Search"
            data-testid="valid-input"
          />
        </div>
        <div
          className="flex flex-col items-center justify-center text-center first-letter:gap-4 p-3"
          data-testid="valid-accordions"
        >
          <GeneralAccordion />
          <TechnicalAccordion />
          <RegisterAccordion />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
