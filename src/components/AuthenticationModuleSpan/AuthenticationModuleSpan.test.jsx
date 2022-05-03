import { render, cleanup } from '../../testUtils';
import {
  HOME_INFORMATION_TEXT,
  HOME_PAGE_TITLE,
} from '../../pages/Home/constants/index';
// those texts are in common with Home Page
import AuthenticationModuleSpan from './AuthenticationModuleSpan';

describe('AuthenticationModuleSpan', () => {
  afterEach(() => cleanup());

  test('should render AuthenticationModuleSpan header text', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleHeader = getByText(HOME_PAGE_TITLE);
    expect(moduleHeader).toBeInTheDocument();
  });

  test('AuthenticationModuleSpan header text should have the primary color', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleHeaderColor = getByText(HOME_PAGE_TITLE);
    expect(moduleHeaderColor).toHaveStyle('color: rgb(106,44,112,1)');
  });

  test('should render AuthenticationModuleSpan information text', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleInfoText = getByText(HOME_INFORMATION_TEXT);
    expect(moduleInfoText).toBeInTheDocument();
  });

  test('AuthenticationModuleSpan information text should have the primary color', () => {
    const { getByText } = render(<AuthenticationModuleSpan />);
    const moduleInfoText = getByText(HOME_INFORMATION_TEXT);
    expect(moduleInfoText).toHaveStyle('color: rgb(106,44,112,1)');
  });
});
