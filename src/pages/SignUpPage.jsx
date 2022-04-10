import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { IoLogoDiscord } from 'react-icons/io5';

import SignUpForm from '../components/SignUp/SignUpForm';

function SignIn() {
  return (
    <div className="flex sm:grid h-100 mb-16">
      <div className="flex justify-center w-full sm:grid grid-cols-7 gap-2">
        <div className="hidden sm:flex flex-col justify-evenly grid-rows-5  col-span-3 w-full rectangle bg-[#FEEEEE]">
          <div className="pl-12">
            <h1 className="text-[#6A2C70]  pt-16   text-5xl font-bold text-center sm:text-left">
              Dreams Will <p className="break-words" /> Come True
            </h1>
            <p className="text-[#6A2C70] pt-6 mr-2 mb-16 text-center sm:text-left">
              If you are a dreamer who pursue, you can find supporters{' '}
              <p className="break-words" />
              for your dreams with Bursapediary. If you are{' '}
              <p className="break-words" /> a supporter, meet with the dreamers
              and help their <p className="break-words" />
              dreams to come true.
            </p>
          </div>
          <div className="ml-12 flex flex-wrap gap-10">
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
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-[#6A2C70] text-7xl hover:text-[#803886]" />
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col items-center justify-center h-screen mx-auto pb-12">
            <div className="w-full max-w-xs">
              <h1 className="text-[#6A2C70] text-4xl font-semibold mb-16 text-center pb-8 pt-12 ">
                Create Account
              </h1>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
