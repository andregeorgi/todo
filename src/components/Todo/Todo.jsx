import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AddButton from "../AddButton/AddButton";

function Todo(props) {
  const { toDo } = props;
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={<span>{"#" + toDo.numberTodo}</span>}
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {toDo.content}
              </Typography>
            }
          />
          <ListItemText secondary={toDo.date}></ListItemText>
          <AddButton label="Edit" variant="text" onClick={props.onClickEdit} />
          <AddButton
            label="Remove"
            variant="text"
            onClick={props.onClickRemove}
          ></AddButton>
        </ListItem>

        <Divider variant="outlined" component="li" />
      </List>
    </div>
  );
}

export default Todo;
