import axios from "axios";
import React, { useState } from "react";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState([]);
  const addTodo = () => {
    axios
      .post("http://localhost:3000/posts", { title: newTodo })
      .then(function (item) {
        props.addTodo();
      })
      .catch(function () {
        console.log("error found !");
      });
    setNewTodo("");
  };
  return (
    <div>
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};
export default AddTodo;
