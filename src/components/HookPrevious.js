import React, { useState } from "react";

const HookPrevious = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>incrementFive</button>
    </div>
  );
};

export default HookPrevious;
