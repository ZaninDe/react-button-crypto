import React, { useState } from 'react';
import './button.css';


export const Button = () => {
  const time = 60 * 60 * 24;
  const [count, setCount] = useState(0);

  function click() {
    setCount(time);
    console.log('click');
  }
  
  return (count == 0 ? (
    <button onClick={() => (setCount(time), console.log('click'))}>Clain</button>
  ) : (
    <button onClick={() => console.log('click')} disabled="disabled">
      {count}
    </button>
  ))
};
