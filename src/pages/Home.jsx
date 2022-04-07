import {
  Header,
  Transation,
  FeaturedProjects,
  ProjectCard,
} from '../components';
import { TRANSATION_MAIN_TEXT, TRANSATION_SUB_TEXT } from '../constants/index';
import { MOCKED_PROJECTS } from '../data/index';

function Home() {
  return (
    <div className="py-8">
      <Header />
      <Transation
        mainText={TRANSATION_MAIN_TEXT}
        subText={TRANSATION_SUB_TEXT}
      />
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
    </div>
  );
}

export default Home;
