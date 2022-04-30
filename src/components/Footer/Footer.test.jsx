import { render, cleanup } from '../../testUtils';

import Footer from './Footer';

describe('Footer', () => {
  afterEach(() => cleanup());

  test('should render Footer', () => {
    const { getByTestId } = render(<Footer />);
    const form = getByTestId('valid-footer');
    expect(form).toBeInTheDocument();
  });

  test('should render Footer careers title', () => {
    const { getByText } = render(<Footer />);
    const careersTitle = getByText('CAREERS');
    expect(careersTitle).toBeInTheDocument();
  });

  test('should render Footer copyrights', () => {
    const { getByText } = render(<Footer />);
    const copyrights = getByText('© 2021-2022 Copyright Bursapediary Inc.');
    expect(copyrights).toBeInTheDocument();
  });

  test('Career title should have the white color', () => {
    const { getByText } = render(<Footer />);
    const careersTitleColor = getByText('CAREERS');
    expect(careersTitleColor).toHaveStyle('color: rgb(255,255,255,1)');
  });

  test('should render Footer email', () => {
    const { getByText } = render(<Footer />);
    const careersTitleColor = getByText('hello@bursapediary.com');
    expect(careersTitleColor).toBeInTheDocument();
  });
});
