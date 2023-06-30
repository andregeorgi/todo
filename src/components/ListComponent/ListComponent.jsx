import React, { useState } from "react";
import AddButton from "../AddButton";
import Button from "@mui/material/Button";
import TextInput from "../TextInput";
import Todo from "../Todo/Todo";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function ListComponent() {
  const toDo = [
    {
      numberTodo: 0,
      prio: 1,
      content: "shopping",
      date: "6/11/2023",
      subTasks: ["shoes", "clothes", "jewerly", "accessories", "hats"],
    },
    {
      numberTodo: 1,
      prio: 3,
      content: "market",
      date: "11/1/2022",
      subTasks: ["banana", "apple", "milk"],
    },
    {
      numberTodo: 2,
      prio: 1,
      content: "cooking",
      date: "1/16/2023",
      subTasks: ["Black peas", "Apple pie", "Steak pie", "Soup"],
    },
    {
      numberTodo: 3,
      prio: 2,
      content: "reading",
      date: "14/3/2023",
      subTasks: ["Charlotte’s Web", "The Outsiders"],
    },
  ];
  const [currentText, setCurrentText] = useState("");
  const [list, setList] = useState(toDo);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [currentCounter, setCurrentCounter] = useState(1);

  const handleClose = () => {
    setList(toDo);
    setOpen(false);
  };
  const handleOpen = (todoNumber) => {
    setOpen(true);
    setCurrentTodo(todoNumber);
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    padding: 0,
  };

  function handleTextInput(newText) {
    setCurrentText(newText);
  }

  function handleEdit() {
    handleTextInputEdit();
    const newList = list.map((item) => {
      if (item.numberTodo === currentTodo) {
        if (item.prio < 3) {
          const updatedItem = {
            ...item,
            prio: currentCounter,
          };

          return updatedItem;
        }
      }
      return item;
    });
    setList(newList);
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

  function handleIncrement() {
    setCurrentCounter(list[currentTodo].prio + 1);
  }

  function handleDecrement() {
    setCurrentCounter(list[currentTodo].prio - 1);
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
            backgroundColor="#212d40"
            icon={<AddIcon />}
            onClick={() => {
              const newItem = {
                numberTodo: list.length + 1,
                prio: 1,
                content: currentText,
                date: new Date().toLocaleDateString(),
              };
              setList([...list, newItem]);
            }}
          />
          <AddButton
            label="Delete All"
            variant="contained"
            backgroundColor="#d11a2a"
            icon={<DeleteIcon />}
            onClick={() => setList([])}
          />
        </Stack>
      </div>
      <div>
        {list.map((item, index) => (
          <Todo
            key={index}
            toDo={item}
            onClickRemove={() => handleRemove(item.numberTodo)}
            onClickEdit={() => handleOpen(item.numberTodo)}
            handleClick={() => setOpenAccordion(!openAccordion)}
            isOpen={openAccordion}
          />
        ))}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <Box sx={style} style={{ borderRadius: 10 }}>
              <div style={{ marginBottom: 70, marginTop: 20 }}>
                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  Fill in the input field
                </Typography>
              </div>
              <div>
                <TextInput
                  label="Edit Todo"
                  style={{ fontWeight: "bold" }}
                  defaultValue={list[currentTodo]?.content} //daca nu exista list[currentTodo], iti da null
                  setTodo={(e) => setCurrentText(e.target.value)}
                ></TextInput>
              </div>

              <Box>
                <div>
                  <Typography>Change priority:</Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <Button onClick={handleDecrement}>-</Button>
                  <Box sx={{ textAlign: "center", m: 1 }}>{currentCounter}</Box>
                  <Button onClick={handleIncrement}>+</Button>
                </div>
              </Box>

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
              <DialogActions>
                <AddButton
                  label="Cancel"
                  variant="text"
                  color="#2a2a2a"
                  icon={<ClearIcon />}
                  onClick={handleClose}
                />

                <AddButton
                  label="Edit"
                  variant="contained"
                  backgroundColor="#212d40"
                  icon={<EditIcon />}
                  onClick={handleEdit}
                ></AddButton>
              </DialogActions>
            </Box>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ListComponent;
