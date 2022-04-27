import TeamCard from '../../components/AboutUs/TeamCard';

function AboutUs() {
  return (
    <div>
      <section>
        <img
          src="https://user-images.githubusercontent.com/60944453/162048684-bbbe43f3-cd5b-4e93-908f-825ac7166ed1.PNG"
          alt=""
        />
        <div>
          <h1>About Us</h1>
          <p>
            We are a team of builders helping people reach their dreams while
            others support them.
          </p>
        </div>
      </section>
      <section>
        <h1>Our Story</h1>
        <p>
          In the React Web Development Bootcamp offered by Re:Coded, we decided
          to build something meaninful in a way that it makes impact in lives of
          people.
        </p>
      </section>
      <section>
        <h1>Our Team</h1>
        <p>Meet the people behind our great product.</p>
        <TeamCard />
      </section>
    </div>
  );
}

export default AboutUs;
