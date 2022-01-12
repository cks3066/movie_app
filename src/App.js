import React from "react";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run always");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  React.useEffect(iRunOnlyOnce, []);
  React.useEffect(() => {
    console.log("Search For");
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default App;
