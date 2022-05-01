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
  const reviews = [
    {
      id: 0,
      review: t('homepage.reviews.0'),
      clientName: 'Cristina Watts',
    },
    {
      id: 1,
      review: t('homepage.reviews.1'),
      clientName: 'Ahmet Demir',
    },
    {
      id: 2,
      review: t('homepage.reviews.2'),
      clientName: 'Josh Turner',
    },
  ];
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
      <Slider items={reviews} />
    </div>
  );
}

export default Home;
