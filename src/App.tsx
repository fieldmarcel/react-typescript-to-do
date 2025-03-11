import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [checked, setchecked] = useState(false);
  const handlesubmit = () => {
    setList([...list, todo]);
    setTodo("");
  };
  const handlecheck = () => {};

  const handledelete = (index: number) => {
    // const newlist = list.filter((_, i) => i !== index);
    // setList(newlist);
    const newlist = list.filter((_, i) => i !== index);
    setList(newlist);
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
        <button onClick={() => handlesubmit()}>submit</button>
      </div>

      {list.map((task, index) => (
        <div key={index} className="flex  items-center gap-2">
          <input type="checkbox" onClick={handlecheck} />

          <span> {task}</span>
          <button className=" gap-2 " onClick={() => handledelete(index)}>
            del
          </button>
        </div>
      ))}
    </div>
  );
}
