import { useState } from "react";
import counter from "./Counter";

function BlueButton() {
  const [count, setCount] = useState(counter.getCount());

  const handleIncrease = () => {
    counter.increment();
    setCount(counter.getCount());
  };

  return <button onClick={handleIncrease}>Blue Button: {count}</button>;
}

export default BlueButton;
