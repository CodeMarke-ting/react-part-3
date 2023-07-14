import { useState } from "react";
import PropTypes from "prop-types";

function Input({ render, obj }) {
  const [temp, setTemp] = useState(0);
  console.log(obj);
  return (
    <>
      <h1>Temperature converter</h1>
      <input
        type="number"
        value={temp}
        min={-273}
        onChange={(e) => setTemp(e.target.value)}
      />
      {/* render props */}
      {render(temp)}
    </>
  );
}

export default Input;

Input.propTypes = {
  render: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    message: PropTypes.string.isRequired,
    isTrue: PropTypes.bool.isRequired,
  }),
};
