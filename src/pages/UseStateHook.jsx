import { useState } from "react";

function UseStateHook() {
  const [color, setColor] = useState("Blue");

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2024",
    color: "Red",
  });

  const handleClick = () => {
    setColor("Green");

    setCar((prev) => ({ ...prev, color: "Green" }));
  };

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // // bad approach
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // good approach
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>My favourite color is {color}</p>
      <p>
        I have a {car.brand} {car.model} car made in {car.year}. The color is{" "}
        {car.color}
      </p>
      <button onClick={handleClick}>Change Color</button>

      <hr />
      <p>Count value: {count}</p>
      <button onClick={incrementCount}>Increment by 4</button>
    </div>
  );
}

export default UseStateHook;
