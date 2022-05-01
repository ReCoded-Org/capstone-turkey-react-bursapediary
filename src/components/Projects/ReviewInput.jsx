import { useState } from 'react';
import PropTypes from 'prop-types';

function ReviewInput({ onReviewSubmit }) {
  const [review, setReview] = useState('');

  function handleReview(event) {
    setReview(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onReviewSubmit(review);
    setReview('');
  }

  return (
    <div className="flex justify-start">
      <div className="p-4 w-2/3">
        <textarea
          className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                  m-0
                  "
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Add your review..."
          value={review}
          onChange={(e) => handleReview(e)}
        />
        <button
          type="button"
          onClick={(e) => handleSubmit(e)}
          className="inline-block mt-2 px-6 py-1.5 bg-primary hover:bg-white text-white hover:text-black border-2 border-primary hover:border-black font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewInput;

ReviewInput.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
};
