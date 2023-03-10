const Drawing = ({ radius, color, x, y }) => {
  const { red, green, blue } = color;

  return (
    <svg viewBox="0 0 100 100">
      <circle cx={x} cy={y} r={radius} fill={`rgb(${red},${green}, ${blue})`} />
    </svg>
  );
};

export default Drawing;
