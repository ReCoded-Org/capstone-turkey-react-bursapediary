import TeamCard from '../../components/AboutUs/TeamCard';

function AboutUs() {
  return (
    <div>
      <section className="my-4 py-8 ">
        <h1 className="text-5xl text-center mb-6 xsnav:text-4xl text-primary  ">
          About Us
        </h1>
        <div className="flex justify-center items-center">
          <img
            src="https://user-images.githubusercontent.com/60944453/162048684-bbbe43f3-cd5b-4e93-908f-825ac7166ed1.PNG"
            alt=""
            className="w-40 smnav:w-28 xsnav:w-20 ml-6"
          />
          <p className="text-3xl text-center lgnav:mr-48 lgnav:ml-48 mdnav:mr-24 mdnav:ml-24 mdnav:text-2xl smnav:mr-16 smnav:ml-16 smnav:text-xl xsnav:mr-8 xsnav:ml-8 xsnav:text-xl items-center mt-auto mb-auto ">
            We are a team of builders helping people reach their dreams while
            others support them.
          </p>
        </div>
      </section>
      <section className="bg-secondary my-2 py-2">
        <h1 className="text-5xl text-center my-8 xsnav:text-4xl">Our Story</h1>
        <p className="text-3xl text-center mb-20 lgnav:mr-48 lgnav:ml-48 mdnav:mr-24 mdnav:ml-24 mdnav:text-2xl smnav:mr-16 smnav:ml-16 smnav:text-xl xsnav:mr-8 xsnav:ml-8 xsnav:text-xl">
          In the React Web Development Bootcamp offered by Re:Coded, we decided
          to build something meaninful in a way that it makes impact in lives of
          people.
        </p>
      </section>
      <section>
        <TeamCard />
      </section>
    </div>
  );
}

export default AboutUs;
