import { useState } from "react";
import counter from "./Counter";

function RedButton() {
  const [count, setCount] = useState(counter.getCount());

  const handleDecrease = () => {
    counter.decrement();
    setCount(counter.getCount());
  };

  return <button onClick={handleDecrease}>Red Button: {count}</button>;
}

export default RedButton;
