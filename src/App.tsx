import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [checked, setchecked] = useState<string[]>([]);

  const handlesubmit = () => {
    setList([...list, todo]);
    setTodo("");
  };

  return (
    <div className="App flex flex-col">
      <h1>to do </h1>

      <div className="flex flex-row">
        <input
          value={todo}
          placeholder="write here"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
        <button onClick={handlesubmit}>submit</button>
      </div>
      {list.map((task, index) => {
        return (
          <div className="flex flex-row">
            <div key={index}> {task}</div>
            <input type="checkbox"></input>
          </div>
        );
      })}
    </div>
  );
}
