const RandomRotation = ({ isRotated, onRotationChange }) => {
  return (
    <div>
      <label htmlFor="rotate-checkbox">Random rotation</label>
      <input
        type="checkbox"
        id="rotate-checkbox"
        checked={isRotated}
        onChange={() => onRotationChange(!isRotated)}
      />
    </div>
  );
};

export default RandomRotation;
