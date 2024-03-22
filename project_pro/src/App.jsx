import { useState } from "react";

export const App = () => {
  const btnClick = () => {
    const [initialValue, setInitialValue] = useState(0);
    console.log("Clicked");
    setInitialValue(initialValue + 1);
    console.log(initialValue);
  };
  return (
    <div>
      {initialValue}
      <button onClick={btnClick}>clickMe</button>
    </div>
  );
};

export default App;
