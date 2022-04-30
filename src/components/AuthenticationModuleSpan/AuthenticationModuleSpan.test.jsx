import { render, cleanup } from '../../testUtils';

import AuthenticationModuleSpan from './AuthenticationModuleSpan';

describe('AuthenticationModuleSpan', () => {
  afterEach(() => cleanup());

  test('should render AuthenticationModuleSpan header text', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleHeader = getByText('Dreams Will Come True');
    expect(moduleHeader).toBeInTheDocument();
  });

  test('AuthenticationModuleSpan header text should have the primary color', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleHeaderColor = getByText('Dreams Will Come True');
    expect(moduleHeaderColor).toHaveStyle('color: rgb(106,44,112,1)');
  });

  test('should render AuthenticationModuleSpan information text', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleInfoText = getByText(
      'If you are a dreamer who pursue, you can find supporters for your dreams with Bursapediary. If you are a supporter, meet with the dreamers and help their dreams to come true.',
    );
    expect(moduleInfoText).toBeInTheDocument();
  });

  test('AuthenticationModuleSpan information text should have the primary color', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleInfoText = getByText(
      'If you are a dreamer who pursue, you can find supporters for your dreams with Bursapediary. If you are a supporter, meet with the dreamers and help their dreams to come true.',
    );
    expect(moduleInfoText).toHaveStyle('color: rgb(106,44,112,1)');
  });
});
