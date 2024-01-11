import React, { useState, useEffect } from "react";
import "./index.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import logo from "./images/todo-logo.png";


function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    // Load todos from local storage on component mount
    const storedTodos = JSON.parse(localStorage.getItem('todos')) ?? [];
    //console.log('Loading Todos:', storedTodos);
    setTodos((prevTodos) => (prevTodos.length === 0 ? storedTodos : prevTodos));
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever it changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const handleEditTodo = (index, editedTodo) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index] = editedTodo;
      return newTodos;
    });
  };

  return (
    <>
    <div className="header-container">
    <img src={logo} alt="Logo" className="logo" />
    <h1 className="main-header">Task list</h1>
    </div>

    <div className="container">
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
        className="list-item-hover-effect" 
      />
    </div>
    </>
  );
}

export default App;
