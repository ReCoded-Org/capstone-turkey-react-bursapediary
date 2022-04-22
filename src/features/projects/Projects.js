import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { fetchProjects } from './projectsSlice';
import { fetchSpecificCategory } from './categorySlice';
import image from '../../assets/images/featuredProjectImg.png';
import ProjectsTypes from '../../components/Projects/ProjectsTypes';
import SelectedProject from './SelectedProject';

function Projects() {
  const [selected, setSelected] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState('');

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
    return setSelectedProjectId(project._id);
  };

  return (
    <div>
      <ProjectsTypes setSelected={setSelected} />
      <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-9 justify-center">
        {selected === 'all'
          ? projectDetails !== null &&
            projectDetails.map((e) => {
              return (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  // eslint-disable-next-line no-underscore-dangle
                  key={e._id}
                  onClick={() => {
                    handleClick(e);
                  }}
                  onKeyDown={handleClick}
                >
                  <ProjectCard
                    title={e.title}
                    image={image}
                    description={e.description}
                  />
                </div>
              );
            })
          : specificCategoryProjects !== null &&
            specificCategoryProjects.map((e) => {
              return (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  // eslint-disable-next-line no-underscore-dangle
                  key={e._id}
                  onClick={() => {
                    handleClick(e);
                  }}
                  onKeyDown={handleClick}
                >
                  <ProjectCard
                    title={e.title}
                    image={image}
                    description={e.description}
                  />
                </div>
              );
            })}
      </div>
      {selectedProjectId && (
        <SelectedProject selectedProjectId={selectedProjectId} />
      )}
    </div>
  );
}

export default Projects;
