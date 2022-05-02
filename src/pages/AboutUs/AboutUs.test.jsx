import { render, cleanup } from '../../testUtils';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  afterEach(() => cleanup());
  test('should render AboutUs Page', () => {
    const { getByTestId } = render(<AboutUs />);
    const AboutUsPage = getByTestId('AboutUs-Page');
    expect(AboutUsPage).toBeInTheDocument();
  });
});
