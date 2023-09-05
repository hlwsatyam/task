import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
// Action Creators
import { addTodo, toggleTodo, deleteTodo } from "../redux/actions";
import "./todo.css";

const TodoApp = () => {
  const todos = useSelector((state) => state);

  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className=" body" >
            <div className="  mb-5 shadow">
              <h6 className="p-3 bg-warning text-white">Add Your Todays Task </h6>
            </div>
            <input
              type="text"
              className=""
              placeholder="enter here"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
            <button onClick={() => handleAddTodo()}>Add Todo</button>
            <h6 className="text-info">Add your ToDo!!</h6>
            <div className="">
              {todos.map((todo) => (
                <p
                  className="shadow m-3 box   "
                  key={todo.id}
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  <input type="checkbox" checked={todo.isCompleted} />
                  <span
                    style={{
                      textDecoration: todo.isCompleted ? "line-through" : "none",
                      minWidth: "45%",
                    }}
                  >
                    {todo.todoName}
                  </span>
                  <b style={{ padding: "10px" }}>Added on - {todo.time}</b>
                  {
                    // todo.isCompleted == true ? (<span style={{ float: 'right', color: '#1c8604' }}>Marked as Completed ! </span>) : <></>
                    todo.isCompleted && (
                      <span style={{ float: "right", color: "#1c8604" }}>
                        Marked as Completed !{" "}
                      </span>
                    )
                  }
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </p>
              ))}
            </div>

          </div>
        </div>




        <div className="footer bg-warning text-center py-3 fw-bold  ">
          © 2023 Copyright: todo-versel.com
        </div>
      </div>
    </>
  )
};

export default TodoApp;