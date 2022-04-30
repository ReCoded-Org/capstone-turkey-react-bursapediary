import { render, cleanup } from '../../testUtils';

import ProjectCard from './ProjectCard';
import FeaturedProjectImg from '../../assets/images/featuredProjectImg.png';

const IMAGE = FeaturedProjectImg;
const TITLE = 'Raise money for charity';
const DESCRIPTION =
  'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum';

describe('ProjectCard', () => {
  afterEach(() => cleanup());

  describe('should render props correctly', () => {
    const renderProjectCard = () =>
      render(
        <ProjectCard title={TITLE} image={IMAGE} description={DESCRIPTION} />,
      );

    test('should render {title}', () => {
      const { getByText } = renderProjectCard();
      const title = getByText(TITLE);
      expect(title).toBeInTheDocument();
    });

    test('should render {description}', () => {
      const { getByText } = renderProjectCard();
      const description = getByText(DESCRIPTION);
      expect(description).toBeInTheDocument();
    });

    test('should render {image}', () => {
      const { getByAltText } = renderProjectCard();
      const image = getByAltText(/project cover/i);
      expect(image).toBeInTheDocument();
    });
  });

  test('should render default image if {image} prop is not provided', () => {
    const { getByAltText } = render(
      <ProjectCard title={TITLE} description={DESCRIPTION} />,
    );
    const image = getByAltText(/project cover/i);
    expect(image).toBeInTheDocument();
  });

  test('should have secondary background color', () => {
    const { getByTestId } = render(
      <ProjectCard title={TITLE} description={DESCRIPTION} />,
    );
    const Container = getByTestId('project-card');
    expect(Container).toHaveStyle('background-color: rgb(254,238,238,1)');
  });

  test('should render "Start Fundraising" tag', () => {
    const { getByRole } = render(
      <ProjectCard title={TITLE} description={DESCRIPTION} />,
    );
    const ActionElement = getByRole('link', { name: /start fundraising/i });
    expect(ActionElement).toBeInTheDocument();
  });
});
