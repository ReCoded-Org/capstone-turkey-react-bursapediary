import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { fetchProjects } from './projectsSlice';
import image from '../../assets/images/featuredProjectImg.png';

function Projects() {
  const projectDetails = useSelector((state) => state.projects.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-9 justify-center">
      {projectDetails != null &&
        projectDetails.map((e) => (
          <ProjectCard
            title={e.title}
            image={image}
            description={e.description}
          />
        ))}
    </div>
  );
}

export default Projects;
