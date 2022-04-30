import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import featuredProjectImg from '../../assets/images/featuredProjectImg.png';

function ProjectCard({ title, image, description }) {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col justify-center items-center sm:max-w-sm bg-secondary text-black rounded-lg sm:p-10 p-4"
      data-testid="project-card"
    >
      <a href="#projectdetail">
        <img className="mb-6 w-full" src={image} alt="Project Cover" />
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
        {t('homepage.donateNow')}
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
