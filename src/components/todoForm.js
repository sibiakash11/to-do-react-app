import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <TextField
        label="Enter your task"
        variant="outlined"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        InputProps={{
          style: {
            backgroundColor: 'white',  // White background
            width: '100%',
            fontSize: '24px',
            fontFamily: 'Inter',
            borderRadius: '25px'

            // Adjust width as needed
          },
        }}
      />
     <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginLeft: '325px' ,  marginTop: '15px'}} // Adjust margin as needed

      >
        Add new task
      </Button>
    </form>
  );
};

export default TodoForm;