export const App = () => {
  const btnClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <button onClick={btnClick}>clickMe</button>
    </div>
  );
};

export default App;
