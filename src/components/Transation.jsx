import PropTypes from 'prop-types';

function Transation({ mainText, subText }) {
  return (
    <div className="flex h-60 w-full bg-primary px-10 text-white items-center justify-between">
      <p className="text-2xl px-10">{mainText}</p>
      {subText ? <p className="text-sm px-10">{subText}</p> : null}
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
