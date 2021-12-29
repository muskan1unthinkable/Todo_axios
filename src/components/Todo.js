import axios from "axios";
import React from "react";
import "../App.css";

const Todo = (props) => {
  const deleteTodo = () => {
    axios.delete(`http://localhost:3000/posts/${props.id}`).then(function () {
      props.deleteTodo();
    });
  };
  return (
    <div className="todoItem">
      <p>{props.title}</p>
      <button className="Deletebtn" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
};
export default Todo;
