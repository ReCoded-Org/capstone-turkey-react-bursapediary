import { render, cleanup } from '../../../testUtils';

import Header from './Header';

describe('Header', () => {
  afterEach(() => cleanup());
  test('should render header title', () => {
    const { getByText } = render(<Header />);
    const headerTitle = getByText('Get in Touch');
    expect(headerTitle).toBeInTheDocument();
  });
});
