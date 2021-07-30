import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  let { className } = props;
  className += ' calc-btn w-100 border rounded-pill fs-3 fw-bold py-2';

  const handleClick = () => clickHandler(name);

  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={handleClick}
      data-testid={`btn-${name}`}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: 'btn-light',
};

export default Button;
