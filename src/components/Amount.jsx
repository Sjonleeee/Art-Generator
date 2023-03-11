const Amount = ({ label, value, onValueChange, min, max }) => {
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    onValueChange(newValue);
  };

  return (
    <div className="number-input">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={100}
      />
    </div>
  );
};

export default Amount;
