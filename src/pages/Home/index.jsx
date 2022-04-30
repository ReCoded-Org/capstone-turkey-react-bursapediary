import { useTranslation } from 'react-i18next';

import {
  Header,
  Transation,
  FeaturedProjects,
  ProjectCard,
  Slider,
} from './components';
import { MOCKED_PROJECTS } from './data/index';

function Home() {
  const { t } = useTranslation();

  return (
    <div data-testid="home-page">
      <Header />
      <Transation
        mainText={t('homepage.transationMainText')}
        subText={t('homepage.transationSubText')}
      />
      {/* composition */}
      <FeaturedProjects>
        {MOCKED_PROJECTS.map((project) => (
          <ProjectCard
            title={project.title}
            image={project.image}
            description={project.description}
            key={project.id}
          />
        ))}
      </FeaturedProjects>
      <Slider items={t('homepage.reviews', { returnObjects: true })} />
    </div>
  );
}

export default Home;
