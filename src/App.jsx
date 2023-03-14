import "./App.css";
import { useState } from "react";
import Amount from "./components/Amount";
import ColorPalette from "./components/Color";
import Drawing from "./components/Drawing";
import RandomRotation from "./components/RandomRotation";
import Slider from "./components/Slider";

const generateItem = () => ({
  y: Math.random() * 50,
});

const defaultList = new Array(50).fill().map(() => generateItem());

const COLORS = ["#000000", "#FF0000", "#00FF00", "#0000FF"];

export default function App() {
  const [widthMultiplier, setWidthMultiplier] = useState(0);
  const [numItems, setNumItems] = useState(defaultList.length);
  const [items, setItems] = useState(defaultList);
  const [color, setColor] = useState(COLORS[0]);
  const [randomRotation, setRandomRotation] = useState(false);

  const handleRandomRotationChange = (newState) => {
    setRandomRotation(newState);
  };

  const handleWidthChange = (value) => {
    setWidthMultiplier(value);

    const tmpItems = [...items];
    setItems(
      tmpItems.map((item) => {
        const tmpItem = { ...item };
        tmpItem.width = value; 
        return tmpItem;
      })
    );
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);

    const tmpItems = [...items];
    setItems(
      tmpItems.map((item) => {
        const tmpItem = { ...item };
        tmpItem.color = newColor;
        return tmpItem;
      })
    );
  };

  const handleNumItemsChange = (value) => {
    setNumItems(value);
    setItems(new Array(value).fill().map(() => generateItem()));
  };

  return (
    <div className="App">
      <ColorPalette
        colors={COLORS}
        activeColor={color}
        onColorChange={handleColorChange}
      />
      <Slider
        value={widthMultiplier}
        onValueChange={handleWidthChange}
        min={0}
        max={10}
        label="Rect width"
      />
      <Amount
        value={numItems}
        onValueChange={handleNumItemsChange}
        label="Number of items"
        min={50}
        max={1000}
      />
      <RandomRotation
        checked={randomRotation}
        onRotateChange={handleRandomRotationChange}
        items={items}
      />
      <Drawing
        items={items}
        color={color}
        widthMultiplier={widthMultiplier}
        randomRotation={randomRotation}
      />
    </div>
  );
}
