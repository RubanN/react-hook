import React, { useState, useEffect } from "react";

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("UseEffect -Updating document title");
    document.title = `you clicked ${count} times`;
  },[count]);//either props and state watch for this empty array

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click{count}times</button>
    </div>
  );
};

export default UseEffectOne;
