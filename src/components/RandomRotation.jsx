import React, { useState } from "react";

const RandomRotation = ({ onRotateChange }) => {
  const [rotate, setRotate] = useState(false);

  const handleRotateChange = () => {
    
    const newState = !rotate;
    setRotate(newState);
    onRotateChange(newState);
  };

  return (
    <div>
      <label htmlFor="rotate-checkbox">Random rotation</label>
      <input
        type="checkbox"
        id="rotate-checkbox"
        checked={rotate}
        onChange={handleRotateChange}
      />
    </div>
  );
};

export default RandomRotation;
