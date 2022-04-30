import { render, cleanup } from '../../testUtils';

import FeaturedProjects from './FeaturedProjects';
import ProjectCard from '../ProjectCard/ProjectCard';

describe('FeaturedProjects', () => {
  afterEach(() => cleanup());

  const renderFeaturedProjects = () =>
    render(
      <FeaturedProjects>
        <ProjectCard title="Project" description="Description" />
      </FeaturedProjects>,
    );

  test('should render title correctly', () => {
    const { getByText } = renderFeaturedProjects();

    const title = getByText(/featured projects/i);
    expect(title).toBeInTheDocument();
  });

  test('title should have primary background color', () => {
    const { getByText } = renderFeaturedProjects();

    const title = getByText(/featured projects/i);
    expect(title).toHaveStyle('color: rgb(106,44,112,1)');
  });

  test('should render children correctly', () => {
    const { getByTestId } = renderFeaturedProjects();

    const children = getByTestId('project-card');
    expect(children).toBeInTheDocument();
  });

  test('should have secondary background color', () => {
    const { getByTestId } = renderFeaturedProjects();

    const Container = getByTestId('featured-projects');
    expect(Container).toHaveStyle('background-color: rgb(254,238,238,1)');
  });
});
