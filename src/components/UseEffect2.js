import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called ");
    window.addEventListener("mouseover", logMousePosition);
    return ()=>{
        console.log('Component Unmounted')
        window.removeEventListener("mouseover", logMousePosition);// do subscrion , submitted
    }
  },[]); // only calls in the render
  return (
    <>
      Hooks X-{x}-{y}
    </>
  );
};

export default UseEffect2;
