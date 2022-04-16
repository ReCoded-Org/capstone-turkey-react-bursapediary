import { render, cleanup, fireEvent } from '@testing-library/react';

import Slider from './Slider';
import { MOCKED_REVIEWS } from '../../pages/Home/data/index';

describe('Slider', () => {
  afterEach(() => cleanup());

  const renderSlider = () => render(<Slider items={MOCKED_REVIEWS} />);

  test('should render title correctly', () => {
    const { getByText } = renderSlider();

    const title = getByText(/what our clients say/i);
    expect(title).toBeInTheDocument();
  });

  test('should render first review item correctly', () => {
    const { getByText } = renderSlider();

    const firstReview = getByText(MOCKED_REVIEWS[0].review);
    expect(firstReview).toBeInTheDocument();

    const firstReviewClientName = getByText(MOCKED_REVIEWS[0].clientName);
    expect(firstReviewClientName).toBeInTheDocument();
  });

  test('should have secondary background color', () => {
    const { getByTestId } = renderSlider();

    const Container = getByTestId('slider');
    expect(Container).toHaveStyle('background-color: rgb(254,238,238,1)');
  });

  test('should render back and arrow buttons', () => {
    const { getByRole } = renderSlider();

    const backButton = getByRole('button', { name: /back-button/i });
    expect(backButton).toBeInTheDocument();

    const forwardButton = getByRole('button', { name: /forward-button/i });
    expect(forwardButton).toBeInTheDocument();
  });

  test('should render previous slider item when user clicks back button', () => {
    const { getByRole, getByText } = renderSlider();

    const backButton = getByRole('button', { name: /back-button/i });

    // show first review default
    const firstReview = getByText(MOCKED_REVIEWS[0].review);
    expect(firstReview).toBeInTheDocument();

    // user cliks back button
    fireEvent.click(backButton);

    const previousReview = getByText(MOCKED_REVIEWS[2].review);
    expect(previousReview).toBeInTheDocument();

    const previousReviewClientName = getByText(MOCKED_REVIEWS[2].clientName);
    expect(previousReviewClientName).toBeInTheDocument();
  });

  test('should render next slider item when user clicks forward button', () => {
    const { getByRole, getByText } = renderSlider();

    const forwardButton = getByRole('button', { name: /forward-button/i });

    // show first review default
    const firstReview = getByText(MOCKED_REVIEWS[0].review);
    expect(firstReview).toBeInTheDocument();

    // user cliks forward button
    fireEvent.click(forwardButton);

    const nextReview = getByText(MOCKED_REVIEWS[1].review);
    expect(nextReview).toBeInTheDocument();

    const nextReviewClientName = getByText(MOCKED_REVIEWS[1].clientName);
    expect(nextReviewClientName).toBeInTheDocument();
  });
});
