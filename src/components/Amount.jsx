import { useState } from "react";

const Amount = ({ onAmountChange }) => {
  const [amount, setAmount] = useState(5);

  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value, 10);
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  return (
    <div>
      <label htmlFor="amount-input">Amount: </label>
      <input
        id="amount-input"
        type="number"
        min="1"
        max="50"
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
};

export default Amount;
