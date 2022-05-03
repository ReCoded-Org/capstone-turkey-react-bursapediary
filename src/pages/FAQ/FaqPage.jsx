import { useTranslation } from 'react-i18next';
import GeneralAccordion from '../../components/Accordions/GeneralAccordion/GeneralAccordion';
import RegisterAccordion from '../../components/Accordions/RegisterAccordion/RegisterAccordion';
import TechnicalAccordion from '../../components/Accordions/TechnicalAccordion/TechnicalAccordion';

function FaqPage() {
  const { t } = useTranslation();

  return (
    <div data-testid="valid-page">
      <div className="flex flex-col items-center justify-center text-center first-letter:gap-4 p-3">
        <p className="font-semibold text-2xl mb-5 text-[#6A2C70]">
          {t('navbar.faq')}
        </p>
        <p className="font-semibold text-4xl mb-5">{t('faq.title')}</p>
        <p className="font-medium text-2xl mb-3">
          {t('faq.subText1')} <br />
          {t('faq.subText2')}
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
