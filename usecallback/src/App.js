import "./styles.css";
import { useCallback, useState } from "react";
import Child from "./components/Child";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <div className="App">
      {count}
      <br />
      <br />
      <button onClick={handleClick}>parent</button>
      <br />
      <br />
      <Child handleClick={handleClick}></Child>
    </div>
  );
}
