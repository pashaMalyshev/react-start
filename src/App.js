import Block1 from './components/block1'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialSuperCalculation = () => {
  console.log('initialSuperCalculation...');
  return Math.round(Math.random() * 20);
}

function App() {
  let myTestCounter = 0;
  const [count, setCount] = useState(initialSuperCalculation());
  const [myData, setMyData] = useState({
    first: 0,
    second: 0,
  });
  function increment() {
    setCount((stateBefore) => stateBefore + 1);
  };
  const decrement = () => {
    setCount((stateBefore) => stateBefore + 1);
  };
  function updateTitle() {
    setMyData((prev) => {
      return {
        first: prev.first + 1,
        second: prev.second - 1
      }
    })
  }
  return (
    <div className="App">
      <Block1 wolfsValue={'FIRST'} counter={count} />
      <div>
        {count}
      </div>
      <Button className="button" variant="primary" onClick={() => { increment() }}>INCREACE</Button>
      <Button variant="danger" onClick={() => { decrement }}>DECREACE</Button>
      <div>{myData.first}</div>
      <div>{myData.second}</div>
      <div>
        <Button className="button" variant="secondary" onClick={() => { updateTitle() }}>Изменить Название</Button>
      </div>
    </div>
  );
}

export default App;
