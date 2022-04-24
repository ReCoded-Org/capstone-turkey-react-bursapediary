/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
                <Link
                  key={e._id}
                  to={`/project/${e._id}`}
                  // onKeyDown={handleClick}
                >
                  <ProjectCard
                    title={e.title}
                    image={image}
                    description={e.description}
                  />
                </Link>
              );
            })
          : specificCategoryProjects !== null &&
            specificCategoryProjects.map((e) => {
              return (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <Link
                  // eslint-disable-next-line no-underscore-dangle
                  key={e._id}
                  to={`/project/${e._id}`}
                  // onKeyDown={handleClick}
                >
                  <ProjectCard
                    title={e.title}
                    image={image}
                    description={e.description}
                  />
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Projects;
