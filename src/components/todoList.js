// TodoList.js
import React from 'react';
import TodoItem from './todoItem.js';

const TodoList = ({ todos, onDelete, onEdit }) => {

  //console.log("Printing these ",{todos});
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
    );
  };
  
  export default TodoList;