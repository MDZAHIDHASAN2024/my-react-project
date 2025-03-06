import React, { useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement} disabled={count === 10 ? true : false}>
        +
      </button>
      <button onClick={handleDecrement} disabled={count === 0 ? true : false}>
        -
      </button>
      <p>This is paragraph</p>
    </div>
  );
};

export default Test;
