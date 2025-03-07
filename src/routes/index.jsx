import React, { useState } from 'react';
import Tests from '../pages/Tests/Tests';

const Index = () => {
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
    </div>
  );
};

export default Index;
