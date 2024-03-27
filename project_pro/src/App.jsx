/*
import { useRef, useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  /*fetch("https://catfact.ninja")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
    

  fetch("goggle.com")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.fact);
    });

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          setData([...data, inputRef.current.value]);
        }}
      >
        submit
      </button>
      <button>Generate Cat</button>
      {data.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
};

export default App;

*/

/*import { useRef, useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja");
      if (!response.ok) {
        throw new Error(`Error fetching cat fact: ${response.statusText}`);
      }
      const catFactData = await response.json();
      setData([...data, catFactData.fact]);
    } catch (error) {
      console.error("Error:", error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => setData([...data, inputRef.current.value])}>
        Submit
      </button>
      <button onClick={getCatFact}>Generate Cat</button>
      {data.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
};

export default App;
*/

import { useRef, useState } from "react";
import axios from "axios"; // Import axios

export const App = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const getCatFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja"); // Use axios.get
      setData([...data, response.data.fact]);
    } catch (error) {
      console.error("Error:", error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => setData([...data, inputRef.current.value])}>
        Submit
      </button>
      <button onClick={getCatFact}>Generate Cat</button>
      {data.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
};

export default App;
