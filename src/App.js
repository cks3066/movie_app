import React from "react";
import "./App.css";

const App = (props) => {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos([...toDos, toDo]);
    setToDos((currentArray) => [...toDos, toDo]);
    console.log(toDos);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
};

export default App;
