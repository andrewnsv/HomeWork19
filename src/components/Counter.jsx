import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const plus = () => {
       setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
  
    return (
    <>
      <p>{count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
}
