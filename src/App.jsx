import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing.jsx";

function App() {
  const [radius, setRadius] = useState(10);
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);

  return (
    <div className="App">
      <Drawing radius={radius} color={{ red, green, blue }} x={x} y={y} />

      <Slider label="Position X" value={x} onValueChange={(v) => setX(v)} />
      <Slider label="Position Y" value={y} onValueChange={(v) => setY(v)} />

      <Slider
        max={50}
        label="Radius"
        value={radius}
        onValueChange={(v) => setRadius(v)}
      />
      <Slider
        max={255}
        label="Red"
        value={red}
        onValueChange={(v) => setRed(v)}
      />
      <Slider
        max={255}
        label="Green"
        value={green}
        onValueChange={(v) => setGreen(v)}
      />
      <Slider
        max={255}
        label="Blue"
        value={blue}
        onValueChange={(v) => setBlue(v)}
      />
    </div>
  );
}

export default App;
