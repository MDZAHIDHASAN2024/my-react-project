import React, { useState } from 'react';

const Test = () => {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" />
      <h2>{text}</h2>
    </div>
  );
};

export default Test;
