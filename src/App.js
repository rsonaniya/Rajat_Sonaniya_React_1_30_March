import { useEffect, useState } from "react";
import Counter from "./Components/Counter";

function App() {
  //Initiliazing the state
  const [count, setCount] = useState(0);
  //logging the value of current count to console
  useEffect(() => {
    console.log(count);
  }, [count]);

  //Creating a handle function based on the operation (+,-,0)
  const handleChangeCount = (value) => {
    value === "+"
      ? setCount(count + 1)
      : value === "-"
      ? setCount(count - 1)
      : setCount(value);
  };
  return (
    <div>
      <h1 className="heading">Counter using React</h1>
      <Counter count={count} onChangeCount={handleChangeCount} />
    </div>
  );
}

export default App;
