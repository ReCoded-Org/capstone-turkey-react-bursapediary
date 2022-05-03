import { useTranslation } from 'react-i18next';

function Address() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-center lg:text-center items-center justify-center">
      <hr className="w-1/2 mb-5 border-1 border-black" />
      <p className="font-bold mb-2">{t('contactUs.address')}</p>
      <p className="font-light mb-2">
        1178 Broadway, Floor 2, #1033, New York, 10001, US
      </p>
      <p className="font-bold mb-2">{t('contactUs.call')}</p>
      <p className="font-light mb-2">+90 555 555 55 55</p>
      <p className="font-light mb-2">+43 777 777 77 77</p>
      <p className="font-bold mb-2">{t('contactUs.openHours')}</p>
      <p className="font-light">{t('contactUs.period')}</p>
      <hr className="w-1/2 mt-5 border-1 border-black" />
    </div>
  );
}

export default Address;
