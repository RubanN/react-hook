import React, { useState, useEffect } from "react";
import UseEffect2 from "./UseEffect2";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffect2 />}
    </div>
  );
};

export default MouseContainer;
