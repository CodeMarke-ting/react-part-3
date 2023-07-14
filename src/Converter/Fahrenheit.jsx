import PropTypes from "prop-types";

function Fahrenheit({ temp }) {
  console.log(temp);
  return <p>{(temp * 9) / 5 + 32} F</p>;
}

export default Fahrenheit;

Fahrenheit.propTypes = {
  temp: PropTypes.number.isRequired,
};
