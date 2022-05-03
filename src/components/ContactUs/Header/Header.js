import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <div className="text-[#6A2C70] m-8">
      <h2 className="text-3xl font-bold text-center">{t('contactUs.title')}</h2>
      <h3 className="text-center mt-2">{t('contactUs.subText')}</h3>
    </div>
  );
}

export default Header;
