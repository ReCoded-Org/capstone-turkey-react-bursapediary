import mainHero from '../assets/images/main-hero.svg';
import { HOME_PAGE_TITLE, HOME_INFORMATION_TEXT } from '../constants/index';

function Information() {
  return (
    <div className=" flex flex-col flex-auto w-32 gap-5 justify-center px-20">
      <h1 className="text-primary font-bold text-4xl ">{HOME_PAGE_TITLE}</h1>
      <p className="leading-loose text-lg text-gray ">
        {HOME_INFORMATION_TEXT}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-6 flex-auto w-64">
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
    <div className="flex justify-center align-center p-20">
      <Information />
      <Hero />
    </div>
  );
}

export default Header;
