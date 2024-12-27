import React, { useState } from 'react';
import Buttons from './Buttons';
import Screen from './Screen';

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [memory, setmemory] = useState(0);
  const [history, sethistory] = useState([])

  const handleInput = (input) => {
    if (input === 'C') {
      setDisplay('0');
      sethistory([]);
    } else if (input === 'CE') {
      setDisplay(display.slice(0, -1) || '0');
    } else if (input === '=') {
      try {
        const result = eval(display);
        sethistory([...history, `${display} = ${result}`]);
        setDisplay(result.toString())
        localStorage.setItem('memory',memory)
        localStorage.setItem('history',JSON.stringify(history))

      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => (prev === '0' ? input : prev + input));
    }
  };

  const handlememory = (action) => {
    const current = parseFloat(display) || 0;
    if (action === 'MC') setmemory(0);
    else if (action === 'MR') setDisplay(memory.toString());
    else if (action === 'M+') setmemory(memory + current);
    else if (action === 'M-') setmemory(memory - current);
    else if (action === 'MS') setmemory(current);
  };
  console.log(history,memory,'memory',display);

  return (
    <div className="calculator">
      <Screen display={display} />
      <Buttons onInput={handleInput} onMemory={handlememory} />
    </div>
  );
}

export default Calculator;
