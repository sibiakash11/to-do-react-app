import React, { useState } from 'react';

const ListItem = ({ todo, onToggle }) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(!isDone);
    onToggle(); // Notify the parent about the toggle action
  };

  return (
    <div
    style={{
        fontSize: '24px',
        marginBottom: '2px',
        fontFamily: 'Inter',
        textDecoration: isDone ? 'line-through' : 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        padding: '2px',
        borderRadius: '1500px',
        width: '250px', // Adjust width as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={handleClick}
    >
      {todo}
    </div>
  );
};

export default ListItem;