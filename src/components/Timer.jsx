import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      setShowMessage(true);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }
  }, [showMessage]);

  return (
    <div>
      <div>Counter: {counter}</div>
      {showMessage && <div>Timer went off!</div>}
    </div>
  );
};

export default Timer;
