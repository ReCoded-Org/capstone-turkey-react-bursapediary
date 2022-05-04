import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { IoLogoDiscord } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

function AuthenticationModuleSpan() {
  const { t } = useTranslation();
  return (
    <div className="hidden sm:flex flex-col justify-evenly grid-rows-5  col-span-3 w-full rectangle bg-[#FEEEEE]">
      <div className="pl-12">
        <h1 className="text-[#6A2C70] pt-16 mr-12 text-5xl font-bold text-center sm:text-left">
          {t('authPageSpan.title1')} <p className="break-words" />
          {t('authPageSpan.title2')}
        </h1>
        <p className="text-[#6A2C70] pt-6 mb-16 mr-12 text-center sm:text-left">
          {t('homepage.informationText')}
        </p>
      </div>
      <div className="ml-12 mr-14 flex flex-wrap gap-10">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle className="text-[#6A2C70] text-7xl hover:text-[#803886]" />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoDiscord className="text-[#6A2C70] text-7xl hover:text-[#803886]" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-[#6A2C70] text-7xl hover:text-[#803886]" />
        </a>
        <a
          href="https://github.com/ReCoded-Org/capstone-turkey-react-bursapediary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-[#6A2C70] text-7xl hover:text-[#803886]" />
        </a>
      </div>
    </div>
  );
}

export default AuthenticationModuleSpan;
