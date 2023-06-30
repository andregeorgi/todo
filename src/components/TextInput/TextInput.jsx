import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TextInput(props) {
  const [text, setText] = useState(props.defaultValue ?? "");

  function handleText(event) {
    props.setTodo(event);
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
        style={{ width: 250 }}
        InputProps={{ sx: { borderRadius: 0, border: "solid 1px #6b718b" } }}
        size="small"
        label={props.label}
        variant="outlined"
        value={text}
        onChange={handleText}
      />
    </Box>
  );
}

export default TextInput;
