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

  return (
    <div>
      <ProjectsTypes setSelected={setSelected} />
      <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-9 justify-center">
        {selected === 'all'
          ? projectDetails !== null &&
            projectDetails.map((e) => {
              return (
                // eslint-disable-next-line no-underscore-dangle
                <div key={e._id}>
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
                // eslint-disable-next-line no-underscore-dangle
                <div key={e._id}>
                  <ProjectCard
                    title={e.title}
                    image={image}
                    description={e.description}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Projects;
