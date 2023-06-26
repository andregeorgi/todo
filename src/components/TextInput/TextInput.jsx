import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TextInput(props) {
  const [text, setText] = useState("");

  function handleText(event) {
    props.addTodo(event);
    setText(event.target.value);
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        value={text}
        onChange={handleText}
      />
    </Box>
  );
}

export default TextInput;
