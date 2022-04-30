import { render, cleanup } from '../../testUtils';

import Transation from './Transation';

describe('Transation', () => {
  const MAIN_TEXT = 'MAIN TEXT';
  const SUB_TEXT = 'SUB TEXT';

  afterEach(() => cleanup());
  test('should render Main Text if mainText prop is provided', () => {
    const { getByText } = render(<Transation mainText={MAIN_TEXT} />);
    const MainText = getByText(/main text/i);
    expect(MainText).toBeInTheDocument();
  });

  test('should render Sub Text if subText prop is provided', () => {
    const { getByText } = render(
      <Transation mainText={MAIN_TEXT} subText={SUB_TEXT} />,
    );
    const SubText = getByText(/sub text/i);
    expect(SubText).toBeInTheDocument();
  });

  test('should not render sub text if subText prop is not provided', () => {
    const { getByText } = render(<Transation mainText={MAIN_TEXT} />);
    expect(() => getByText(/sub text/i)).toThrow();
  });

  test('should have primary background color', () => {
    const { getByTestId } = render(
      <Transation mainText={MAIN_TEXT} subText={SUB_TEXT} />,
    );
    const Container = getByTestId('transation-container');
    expect(Container).toHaveStyle('background-color: rgb(106,44,112,1)');
  });

  test('should have white text color', () => {
    const { getByTestId } = render(
      <Transation mainText={MAIN_TEXT} subText={SUB_TEXT} />,
    );
    const Container = getByTestId('transation-container');
    expect(Container).toHaveStyle('color: rgb(255,255,255,1)');
  });
});
