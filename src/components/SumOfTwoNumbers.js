import React, { useState } from 'react';

function SumOfTwoNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSum = () => {
    return parseInt(num1) + parseInt(num2);
  };

  return (
    <div>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter first number"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter second number"
      />
      <p>Sum: {handleSum()}</p>
    </div>
  );
}

export default SumOfTwoNumbers;
