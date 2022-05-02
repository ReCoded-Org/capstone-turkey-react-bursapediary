import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Maher from '../../assets/images/Maher.png';
import Kutay from '../../assets/images/Kutay.png';
import Akin from '../../assets/images/Akin.png';
import Hatice from '../../assets/images/Hatice.png';
import Orkun from '../../assets/images/Orkun.png';
import Ozer from '../../assets/images/Ozer.png';
import Teoman from '../../assets/images/Teoman.png';

function TeamCard() {
  const { t } = useTranslation();
  return (
    <div className="my-4 py-8 bg-main" data-testid="teamcard-component">
      <h1 className="text-5xl text-center mb-10 xsnav:text-4xl">
        {t('aboutUs.title3')}
      </h1>
      <p className="text-3xl text-center mb-20 mdnav:text-2xl smnav:text-xl xsnav:text-xl">
        {t('aboutUs.info3')}
      </p>
      <div className="flex flex-wrap justify-center mr-8 ml-8 mb-16">
        <div className="w-48 -mr-4 z-50 mb-4 ">
          <img src={Maher} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/maqalaqil" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/maher-al-aqil-56895894/">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex justify-center flex-col ">
            <h4 className="text-center text-sm">Maher Al-Aqil</h4>
            <h4 className="text-center text-base">Project Supervisor</h4>
          </div>
        </div>
        <div className="w-48 -mr-4 z-40 mb-4">
          <img src={Kutay} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/Iseluin" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/kutay-ka%C4%9Fan-%C3%B6zen/">
              <FaLinkedinIn />
            </a>
          </div>

          <h4 className="text-center text-sm">Kutay Kağan Özen</h4>
          <h3 className="text-center text-base">Lead Engineer</h3>
        </div>
        <div className="w-48 -mr-4 z-30 mb-4">
          <img src={Akin} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/theakinkavak" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/theakinkavak/">
              <FaLinkedinIn />
            </a>
          </div>

          <h4 className="text-center text-sm">Akın Kavak</h4>
          <h3 className="text-center text-base">Frontend Developer</h3>
        </div>
        <div className="w-48 -mr-4 z-20 mb-4">
          <img src={Hatice} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/haticecs" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/haticecs/">
              <FaLinkedinIn />
            </a>
          </div>
          <h4 className="text-center text-sm">Hatice Demir</h4>
          <h3 className="text-center text-base">Frontend Developer</h3>
        </div>
        <div className="w-48 -mr-4 z-10 mb-4">
          <img src={Orkun} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/orkunseyman" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/orkunseyman/">
              <FaLinkedinIn />
            </a>
          </div>
          <h4 className="text-center text-sm">Orkun Seyman</h4>
          <h3 className="text-center text-base">Frontend Developer</h3>
        </div>
        <div className="w-48 -mr-4 z-0 mb-4">
          <img src={Ozer} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/OzerOzturk" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/ozerozturk/">
              <FaLinkedinIn />
            </a>
          </div>
          <h4 className="text-center text-sm">Özer Öztürk</h4>
          <h3 className="text-center text-base">Frontend Developer</h3>
        </div>
        <div className="w-48 mb-4">
          <img src={Teoman} alt="" className="mb-4 rounded-full" />
          <div className="flex justify-center mb-4">
            <a href="https://github.com/bayogluteoman" className="mr-4">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/teomanbayoglu/">
              <FaLinkedinIn />
            </a>
          </div>
          <h4 className="text-center text-sm">Teoman Bayoğlu</h4>
          <h3 className="text-center text-base">Frontend Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
