import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todo, setTodo] = useState([]);
  const getUpdatedTodo = () => {
    axios
      .get("http://localhost:3000/posts")
      .then(function (todo) {
        setTodo(todo.data);
      })
      .catch(function () {
        console.log("error found !");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then(function (todo) {
        setTodo(todo.data);
      })
      .catch(function () {
        console.log("error found !");
      });
  }, []);
  return (
    <div className="Container">
      {todo.map((item) => (
        <Todo
          deleteTodo={getUpdatedTodo}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <AddTodo addTodo={getUpdatedTodo} />
    </div>
  );
}

export default App;
