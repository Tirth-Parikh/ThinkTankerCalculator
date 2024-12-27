import React, { useEffect, useState } from 'react';

function HistoryMemory() {
    // localStorage.setItem('memory',memory)
    //     localStorage.setItem('history',JSON.stringify(history))
    const [histry,setHisry]=useState([])
    const [memry,setMemry]=useState('')

    useEffect(()=>{
        setHisry(JSON.parse(localStorage.getItem('history')))
        setMemry(localStorage.getItem('memory'))
    },[histry,])
  return (
    <div className="history-memory">
      <div>
        <h3>History</h3>
        <ul>
          {histry?.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Memory</h3>
        <p>{memry}</p>
      </div>
    </div>
  );
}

export default HistoryMemory;
