import { render, cleanup } from '../../testUtils';
import TeamCard from './TeamCard';

describe('TeamCard', () => {
  afterEach(() => cleanup());
  test('should render teamCard Component', () => {
    const { getByTestId } = render(<TeamCard />);
    const teamCardComponent = getByTestId('teamcard-component');
    expect(teamCardComponent).toBeInTheDocument();
  });
});
