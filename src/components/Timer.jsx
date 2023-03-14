import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>Counter: {counter}</div>
    </div>
  );
};

export default Timer;
