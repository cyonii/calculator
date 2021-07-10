import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  const displayCSS = 'px-2 py-3 py-lg-4 rounded-pill mb-3 bg-secondary text-end fs-5 text-white';

  return <div className={`${displayCSS}`}>{result}</div>;
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
