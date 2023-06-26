import React, { useState } from "react";
import AddButton from "../AddButton";
import TextInput from "../TextInput";
import Todo from "../Todo/Todo";

function ListComponent() {
  const [toDo, setTodo] = useState([
    { numberTodo: 1, content: "shopping", date: "6/11/2023" },
    { numberTodo: 2, content: "market", date: "11/1/2022" },
    { numberTodo: 3, content: "cooking", date: "1/16/2023" },
    { numberTodo: 4, content: "shopping", date: "4/3/2023" },
  ]);

  function handleAddTodo(newText) {
    const newItem = {
      numberTodo: toDo.length + 1,
      content: newText,
      date: new Date().toLocaleString,
    };
    setTodo([...toDo, newItem]);
  }

  function handleDeleteTodo() {
    setTodo([]);
  }

  return (
    <div>
      <TextInput />
      <AddButton label="Add" onClick={handleAddTodo} />
      <AddButton label="Delete" onClick={handleDeleteTodo} />

      {toDo.map((item, index) => (
        <Todo
          index={item.numberTodo}
          contentTodo={item.content}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default ListComponent;
