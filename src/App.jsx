import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing.jsx";

function App() {
  const [style, setStyle] = useState({
    radius: 10,
    red: 10,
    green: 100,
    blue: 150,
    x: 50,
    y: 50,
  });

  const handleRadiusChange = (radius) => {
    // Shorthand property names
    setStyle({ ...style, radius });
  };

  const handleChannelChange = (colorChannel, value) => {
    // Shorthand property names
    setStyle({ ...style, [colorChannel]: value });
  };

  const handlePositionChange = (position, value) => {
    // Shorthand property names
    setStyle({ ...style, [position]: value });
  };

  const { radius, red, green, blue, x, y } = style;

  return (
    <div className="App">
      <Drawing radius={radius} color={{ red, green, blue }} x={x} y={y} />

      <Slider
        label="Position X"
        value={x}
        onValueChange={(v) => handlePositionChange("x",v)}
      />

      <Slider
        label="Position Y"
        value={y}
        onValueChange={(v) => handlePositionChange("y",v)}
      />

      <Slider
        max={50}
        label="Radius"
        value={radius}
        onValueChange={(v) => handleRadiusChange(v)}
      />
      <Slider
        max={255}
        label="Red"
        value={red}
        onValueChange={(v) => handleChannelChange("red", v)}
      />
      <Slider
        max={255}
        label="Green"
        value={green}
        onValueChange={(v) => handleChannelChange("green", v)}
      />
      <Slider
        max={255}
        label="Blue"
        value={blue}
        onValueChange={(v) => handleChannelChange("blue", v)}
      />
    </div>
  );
}

export default App;
