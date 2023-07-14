import PropTypes from "prop-types";

function Kelvin({ temp }) {
  return <p>{temp ? parseInt(temp) + 273 : 273} K</p>;
}

export default Kelvin;

Kelvin.propTypes = {
  temp: PropTypes.number.isRequired,
};
