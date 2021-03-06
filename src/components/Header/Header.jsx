import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import mainHero from '../../assets/images/main-hero.svg';

function Information() {
  const user = useSelector((state) => state.user.currentUser);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col flex-auto w-full sm:w-32 gap-5 justify-center lg:px-20 md:px-10 sm:px-8">
      <h1 className="text-primary font-bold  text-base lg:text-4xl md:text-2xl sm:text-xl text-center sm:text-left">
        {t('homepage.title')}
      </h1>
      <p className="leading-normal sm:leading-loose text-gray text-sm lg:text-lg  md:text-base sm:text-sm  ">
        {t('homepage.informationText')}
      </p>
      {!user && (
        <button
          className="w-40 bg-primary hover:bg-primaryHover items-center text-white text-xs lg:text-sm md:text-sm sm:text-xs py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline self-center sm:self-auto"
          type="submit"
          onClick={() => navigate('/signup')}
        >
          {t('homepage.actionButtonText')}
        </button>
      )}
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-6 flex-auto w-full lg:w-64 md:w-40 sm:w-36">
      <img
        className="w-full h-full"
        src={mainHero}
        alt="Illustration of people who have dreams"
      />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-center align-center p-10 sm:p-20">
      <Information />
      <Hero />
    </div>
  );
}

export default Header;
