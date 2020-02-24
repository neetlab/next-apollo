import React, { useState, useCallback } from "react";
import { NextPage } from "next";

const Index: NextPage = () => {
  const [count, increment] = useState(0);

  const handleClick = useCallback(() => increment(count + 1), [count]);

  return (
    <div>
      <h3>Your count: {count}</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Index;
