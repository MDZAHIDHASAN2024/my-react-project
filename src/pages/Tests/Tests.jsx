import React, { useState } from 'react';

const Test = () => {
  const handleChild = (e) => {
    e.stopPropagation();
    console.log(e);
  };
  const handleParent = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="border" onClick={handleParent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias
          voluptate iste dicta pariatur laudantium rem beatae exercitationem
          cupiditate nihil.
        </p>
        <div onClick={handleChild} className="border">
          <button>click</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
