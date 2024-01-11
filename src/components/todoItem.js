import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ListItem from "./listItem.js";

const TodoItem = ({ index, todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleSave = () => {
    onEdit(index, editedTodo);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        marginBottom: "15px",
        padding: "15px",
        borderRadius: "25px",
        backgroundColor: "#f7dca5",
      }}
      className="list-item-hover-effect"
    >
      {isEditing ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <TextField
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            variant="outlined"
            label="Edit Task"
            InputProps={{
              style: {
                backgroundColor: "white", // White background
                width: "100%",
                fontSize: "24px",
                fontFamily: "Inter",
                borderRadius: "25px",

                // Adjust width as needed
              },
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Stack>
      ) : (
        <>
          <ListItem todo={todo} onToggle={() => {}} />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDelete(index)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Stack>
        </>
      )}
    </li>
  );
};

export default TodoItem;
