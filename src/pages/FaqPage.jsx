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

        <p className="font-medium text-2xl mb-3">
          We have gathered the most common question we get regarding <br />
          bursaPediary FAQ and it&apos;s features.
        </p>

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
