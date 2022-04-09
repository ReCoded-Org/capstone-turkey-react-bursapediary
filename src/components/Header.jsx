import mainHero from '../assets/images/main-hero.svg';
import { HOME_PAGE_TITLE, HOME_INFORMATION_TEXT } from '../constants/index';

function Information() {
  return (
    <div className=" flex flex-col flex-auto w-full sm:w-32 gap-5 justify-center lg:px-20 md:px-10 sm:px-8">
      <h1 className="text-primary font-bold  text-base lg:text-4xl md:text-2xl sm:text-xl text-center sm:text-left">
        {HOME_PAGE_TITLE}
      </h1>
      <p className="leading-normal sm:leading-loose text-gray text-sm lg:text-lg  md:text-base sm:text-sm  ">
        {HOME_INFORMATION_TEXT}
      </p>
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
