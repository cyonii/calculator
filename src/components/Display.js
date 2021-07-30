import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, operator } = props;
  const result = operator ? next : total;

  const className = 'px-2 py-3 py-lg-4 rounded-pill mb-3 bg-secondary text-end fs-5 text-white';

  return (
    <div className={`${className}`} data-testid="display">
      {result || total || 0}
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
};

export default Display;
