import PropTypes from 'prop-types';

import featuredProjectImg from '../../assets/images/featuredProjectImg.png';

function ProjectCard({ title, image, description }) {
  return (
    <div className="flex flex-col justify-center items-center sm:max-w-sm bg-secondary text-black rounded-lg sm:p-10 p-4">
      <a href="#projectdetail">
        <img className="mb-6 w-full" src={image} alt="" />
      </a>
      <a href="#projectdetail">
        <h3 className="text-2xl font-light">{title}</h3>
      </a>
      <p className="my-6 font-normal">{description}</p>
      <hr className="h-1 w-full mb-6" />
      <a
        href="#projectdetail"
        className="text-xl text-center leading-4 tracking-wider font-light"
      >
        Start Fundraising
      </a>
    </div>
  );
}
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node,
  description: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  image: featuredProjectImg,
};

export default ProjectCard;
