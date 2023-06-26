import React, { useState } from "react";
import AddButton from "../AddButton";
import TextInput from "../TextInput";
import Todo from "../Todo/Todo";
import Stack from "@mui/material/Stack";

function ListComponent() {
  const [toDo, setTodo] = useState([
    { numberTodo: 1, content: "shopping", date: "6/11/2023" },
    { numberTodo: 2, content: "market", date: "11/1/2022" },
    { numberTodo: 3, content: "cooking", date: "1/16/2023" },
    { numberTodo: 4, content: "shopping", date: "4/3/2023" },
  ]);
  const [currentText, setCurrentText] = useState("");

  function handleTextInput(newText) {
    setCurrentText(newText);
  }

  return (
    <>
      <div>
        <Stack spacing={2} direction="row" className="align-items">
          <TextInput addTodo={(e) => handleTextInput(e.target.value)} />
          <AddButton
            label="Add"
            onClick={() => {
              const newItem = {
                numberTodo: toDo.length + 1,
                content: currentText,
                date: new Date().toLocaleDateString(),
              };
              setTodo([...toDo, newItem]);
            }}
          />
          <AddButton label="Delete" onClick={() => setTodo([])} />
        </Stack>
      </div>
      <div>
        {toDo.map((item) => (
          <Todo
            key={item.numberTodo}
            index={item.numberTodo}
            contentTodo={item.content}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}

export default ListComponent;
