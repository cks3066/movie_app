import React from "react";
import "./App.css";

const App = (props) => {
  const [hours, setHours] = React.useState(2);

  return (
    <>
      <h1>{hours}</h1>
    </>
  );
};

export default App;
