import React from 'react';

function Buttons({ onInput, onMemory }) {
  const buttons = [
    'C', 'CE', '<-', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', 
  ];

  const memoryButtons = ['MC', 'MR', 'M+', 'M-', 'MS'];

  return (
    <div className="buttons">
      {memoryButtons.map((btn) => (
        <button key={btn} onClick={() => onMemory(btn)}>{btn}</button>
      ))}
      {buttons.map((btn) => (
        <button key={btn} onClick={() => onInput(btn)}>{btn}</button>
      ))}
    </div>
  );
}

export default Buttons;
