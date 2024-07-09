import React from 'react';

const Counter = ({ onDecrement, onIncrement, count }) => {
  //   const [count, setCount] = useState(0);

  //   const onIncrement = () => {
  //     setCount(count + 1);
  //   };

  //   const onDecrement = () => {
  //     setCount(count - 1);
  //   };
  return (
    <div>
      {/* <button type="button" onClick={() => setCount(count + 1)}> */}
      <button type="button" onClick={onIncrement}>
        +
      </button>
      <span>{count}</span>
      {/* <button type="button" onClick={() => setCount(count - 1)}> */}
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
