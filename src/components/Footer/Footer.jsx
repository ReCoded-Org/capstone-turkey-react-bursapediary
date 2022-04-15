import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillHome,
} from 'react-icons/ai';

function Footer() {
  return (
    <div>
      <footer
        className="text-center lg:text-left bg-[#6A2C70]"
        data-testid="valid-footer"
      >
        <div className="mx-6 pt-5 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
            <div className="">
              <h6
                className="
                font-semibold
                mb-4
                flex
                items-center
                justify-center
                md:justify-start
                text-white
              "
              >
                CONTACT US
              </h6>
              <p className="text-white mb-5">
                If you run a project and seek funding, we can currently support
                projects. We appreciate your comments, questions and
                suggestions. Please use the contact page or send us an email.
              </p>
              <a href="mailto: hello@bursapediary.com" className="text-white">
                hello@bursapediary.com
              </a>
            </div>

            <div className="">
              <h6 className="font-semibold mb-4 flex justify-center md:justify-start text-white   ">
                CAREERS
              </h6>
              <p className="text-white">
                Help us make a real difference on a global scale. We are
                dedicated to our purpose of unlocking the power of funds to
                enhance quality of life for everyone. Whether you are starting
                or continuing your career, explore how you can work with us.
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-white">
                LOCATIONS
              </h6>

              <div className="flex justify-center ">
                <AiFillHome className="text-[#ffffff] text-xl mr-1" />
                <a href="https://www.google.com/maps/place/Re:Coded/@41.028732,28.9748113,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab92c15420c27:0x696a9c7a83366e60!8m2!3d41.028728!4d28.977">
                  <p className="flex items-center justify-center md:justify-start mb-4 text-white ">
                    Camcı Fevzi Sk. No:32, 34433 Beyoğlu/İstanbul
                  </p>
                </a>
              </div>

              <div className="flex justify-center">
                <AiFillHome className="text-[#ffffff] text-xl mr-1" />
                <a href="https://www.google.com/maps/place/1178+Broadway+2+1033,+New+York,+NY+10001,+Amerika+Birle%C5%9Fik+Devletleri/@40.7452728,-73.9905456,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a60f737d9f:0x29524ecce6633e4e!8m2!3d40.7452688!4d-73.9883569">
                  <p className="flex items-center justify-center md:justify-start mb-4 text-white">
                    1178 Broadway, Floor 2, #1033, New York, 10001, US
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-2 pb-5 bg-[#6A2C70]">
          <div className="mb-5 flex flex-row justify-center">
            <a href="http://bursapediary.com/" className="text-white p-2">
              <AiFillTwitterCircle className="text-[#ffffff] text-3xl hover:text-[#00ACEE]" />
            </a>

            <a href="http://bursapediary.com/" className="text-white p-2">
              <AiFillInstagram className="text-[#ffffff] text-3xl hover:text-[#FFDC80]" />
            </a>

            <a href="http://bursapediary.com/" className="text-white p-2">
              <AiFillLinkedin className="text-[#ffffff] text-3xl hover:text-[#0E76A8]" />
            </a>

            <a href="http://bursapediary.com/" className="text-white p-2">
              <AiFillGithub className="text-[#ffffff] text-3xl hover:text-[#171515]" />
            </a>
          </div>
          <span className="text-white font-semibold">
            © 2021-2022 Copyright Bursapediary Inc.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
