import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState("");
  const handlesubmit = () => {
    setTodo(todo);
  };

  return (
    <div className="App flex flex-col">
      <h1>to do </h1>

      <div className="flex flex-row">
        <input
          placeholder="write here"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
        <button onClick={handlesubmit}>submit</button>
        <div>{todo}</div>
      </div>
    </div>
  );
}
