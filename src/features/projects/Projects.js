import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { fetchProjects } from './projectsSlice';
import { fetchSpecificCategory } from './categorySlice';
import image from '../../assets/images/featuredProjectImg.png';
import ProjectsTypes from '../../components/Projects/ProjectsTypes';

function Projects() {
  const [selected, setSelected] = useState('');
  const projectDetails = useSelector((state) => state.projects.entities);
  const specificCategoryProjects = useSelector(
    (state) => state.category.entities,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSpecificCategory(selected));
  }, [dispatch, selected]);

  const handleClick = (project) => {
    // eslint-disable-next-line no-underscore-dangle
    return console.log(project._id);
  };

  return (
    <div>
      <ProjectsTypes setSelected={setSelected} />
      <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-9 justify-center">
        {selected === 'all'
          ? projectDetails !== null &&
            projectDetails.map((selectedProject) => {
              return (
                // eslint-disable-next-line no-underscore-dangle
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  // eslint-disable-next-line no-underscore-dangle
                  key={selectedProject._id}
                  // eslint-disable-next-line no-underscore-dangle
                  onClick={() => {
                    handleClick(selectedProject);
                  }}
                  onKeyDown={handleClick}
                >
                  <ProjectCard
                    title={selectedProject.title}
                    image={image}
                    description={selectedProject.description}
                  />
                </div>
              );
            })
          : specificCategoryProjects !== null &&
            specificCategoryProjects.map((selectedProject) => {
              return (
                // eslint-disable-next-line no-underscore-dangle
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  // eslint-disable-next-line no-underscore-dangle
                  key={selectedProject._id}
                  // eslint-disable-next-line no-underscore-dangle
                  onClick={() => {
                    handleClick(selectedProject);
                  }}
                  onKeyDown={handleClick}
                >
                  <ProjectCard
                    title={selectedProject.title}
                    image={image}
                    description={selectedProject.description}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Projects;
