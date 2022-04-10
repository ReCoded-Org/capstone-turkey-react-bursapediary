import PropTypes from 'prop-types';

function Transation({ mainText, subText }) {
  return (
    <div className="flex flex-col text-center sm:text-left sm:flex-row h-auto sm:h-60 w-full bg-primary p-10 text-white items-center justify-evenly sm:justify-between">
      <p className="text-xl lg:text-2xl md:text-xl sm:text-base px-4 lg:px-10 md:px-6 sm:px-4">
        {mainText}
      </p>
      {subText ? (
        <p className="text-sm px-10 mt-10 sm:mt-0">{subText}</p>
      ) : null}
    </div>
  );
}
Transation.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

Transation.defaultProps = {
  subText: undefined,
};

export default Transation;
