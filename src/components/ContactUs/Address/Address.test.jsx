import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Address from './Address';

describe('Adress', () => {
  afterEach(() => cleanup());
  test('should render address title', () => {
    const { getByText } = render(<Address />);
    const addressTitle = getByText('ADDRESS');
    expect(addressTitle).toHaveStyle('color: rgb(0,0,0,1)');
  });
});
