import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

function Timer() {
  const [runFlag, setRunFlag] = useState(false);
  const [timer, setTimer] = useState(null);
  const [myTimer, setMyTimer] = useState(0);
  const runTimer = () => {
    console.log('runTimer.....');
    const timerFunc = setInterval(() => {
      setMyTimer(prev => prev + 1)
    }, 1000);
    setTimer(timerFunc);
  }
  useEffect(() => {
    console.log('useEffect --->  runFlag = ', runFlag);
    if (runFlag) {
      runTimer();
    } else {
      clearInterval(timer)
    }
  }, [runFlag]);

  return (
    <div>
      <pre>
        {myTimer}  |  {runFlag ? 1 : 0}
      </pre>
      <Button variant="primary" onClick={() => setMyTimer(0)}>RESET</Button>
      <Button variant="secondary" onClick={() => setRunFlag(prev => !prev)}>STOP / START </Button>
    </div>
  )
}

export default Timer

