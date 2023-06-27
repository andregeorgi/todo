import React, { useState } from "react";
import AddButton from "../AddButton";
import TextInput from "../TextInput";
import Todo from "../Todo/Todo";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function ListComponent() {
  const toDo = [
    { numberTodo: 1, content: "shopping", date: "6/11/2023" },
    { numberTodo: 2, content: "market", date: "11/1/2022" },
    { numberTodo: 3, content: "cooking", date: "1/16/2023" },
    { numberTodo: 4, content: "reading", date: "4/3/2023" },
  ];
  const [currentText, setCurrentText] = useState("");
  const [list, setList] = React.useState(toDo);
  const [currentTodo, setCurrentTodo] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = (todoNumber) => {
    setOpen(true);
    setCurrentTodo(todoNumber);
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 430,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
  };

  function handleTextInput(newText) {
    setCurrentText(newText);
  }

  function handleTextInputEdit() {
    const newList = list.map((item) => {
      if (item.numberTodo === currentTodo) {
        const updatedItem = {
          ...item,
          content: currentText,
        };

        return updatedItem;
      }
      return item;
    });
    setList(newList);
    setOpen(false);
  }

  function handleRemove(numberTodo) {
    setList((oldValues) =>
      oldValues.filter((oldValue) => oldValue.numberTodo !== numberTodo)
    );
  }

  return (
    <>
      <div>
        <Stack spacing={2} direction="row" className="align-items">
          <TextInput
            label="Add Todo"
            setTodo={(e) => handleTextInput(e.target.value)}
          />
          <AddButton
            label="Add"
            variant="contained"
            color="#212d40"
            icon={<AddIcon />}
            onClick={() => {
              const newItem = {
                numberTodo: list.length + 1,
                content: currentText,
                date: new Date().toLocaleDateString(),
              };
              setList([...list, newItem]);
            }}
          />
          <AddButton
            label="Delete All"
            variant="contained"
            color="#d11a2a"
            icon={<DeleteIcon />}
            onClick={() => setList([])}
          />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h2"
                style={{ height: 150, textAlign: "center", fontWeight: "bold" }}
              >
                Fill in the input field
              </Typography>

              <TextInput
                label="Edit Todo"
                style={{ textAlign: "center", fontWeight: "bold" }}
                setTodo={(e) => setCurrentText(e.target.value)}
              ></TextInput>

              <DialogTitle sx={{ m: 0, p: 2 }}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogActions style={{ height: 355 }}>
                <AddButton
                  label="Cancel"
                  variant="contained"
                  icon={<ClearIcon />}
                  onClick={handleClose}
                />

                <AddButton
                  label="Add"
                  variant="contained"
                  color="#212d40"
                  icon={<AddIcon />}
                  onClick={handleTextInputEdit}
                >
                  Save
                </AddButton>
              </DialogActions>
            </Box>
          </Modal>
        </Stack>
      </div>
      <div>
        {list.map((item, index) => (
          <Todo
            key={index}
            toDo={item}
            onClickRemove={() => handleRemove(item.numberTodo)}
            onClickEdit={() => handleOpen(item.numberTodo)}
          />
        ))}
      </div>
    </>
  );
}

export default ListComponent;
