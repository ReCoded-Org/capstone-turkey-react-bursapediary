import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import image from '../../assets/images/featuredProjectImg.png';

function Projects() {
  const [projects, setProjects] = useState([]);

  const API_END_POINT = 'https://bursapediary.com/projects';

  useEffect(() => {
    fetch(API_END_POINT)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, [API_END_POINT]);

  return (
    <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-9 justify-center">
      {projects.map((e) => (
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
