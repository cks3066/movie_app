import React from "react";
import "./App.css";

const App = (props) => {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteClick = (e) => {
    const target = e.target.id;
    setToDos((currentArray) =>
      currentArray.filter((item) => {
        return item !== target;
      })
    );
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
          <button id={item} onClick={deleteClick}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
