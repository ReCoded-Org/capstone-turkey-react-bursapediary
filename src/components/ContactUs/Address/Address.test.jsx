import { render, cleanup } from '../../../testUtils';

import Address from './Address';

describe('Adress', () => {
  afterEach(() => cleanup());
  test('should render address title color white', () => {
    const { getByText } = render(<Address />);
    const addressTitle = getByText('ADDRESS');
    expect(addressTitle).toHaveStyle('color: rgb(0,0,0,1)');
  });
});
