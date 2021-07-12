import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, className } = props;
  const btnClasses = 'calc-btn w-100 border rounded-pill fs-3 fw-bold py-2';

  return (
    <button className={`btn ${className} ${btnClasses}`} type="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'btn-light',
};

export default Button;
