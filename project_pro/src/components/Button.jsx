export const Button = ({ data, setToValueFunction }) => {
  return (
    <div>
      <button
        onClick={() => {
          setToValueFunction(10);
        }}
      >
        set10
      </button>
      {data}
    </div>
  );
};
