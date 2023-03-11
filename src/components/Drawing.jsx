const Drawing = ({ items, color }) => {
  const canvasWidth = 100;
  const canvasHeight = 100;
  const itemWidth = canvasWidth / items.length;

  return (
    <svg viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}>
      {items.map((item, index) => {
        const x = itemWidth * index + itemWidth / 2 - item.radius / 2;
        const y = Math.max(
          item.radius / 2,
          Math.min(canvasHeight - item.radius / 2, item.y - item.radius / 2)
        );

        const width = Math.min(canvasWidth - x, item.radius);
        const height = Math.min(canvasHeight - y, item.radius);

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            fill={color}
          />
        );
      })}
    </svg>
  );
};

export default Drawing;
