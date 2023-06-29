import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AddButton from "../AddButton/AddButton";

function Todo(props) {
  const { toDo } = props;
  return (
    <div className="border-box">
      <div>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            border: "solid 1px #6b718b",
            borderRadius: 3,
          }}
        >
          <ListItem className="margin-left">
            <ListItemText
              primary={
                <div>
                  <span>{"#" + toDo.numberTodo++}</span>
                  <span>{"-prio:" + toDo.prio}</span>
                </div>
              }
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
            <div>
              <AddButton
                label="Edit"
                variant="text"
                onClick={props.onClickEdit}
              />
            </div>
            <div className="padding-right-btn">
              <AddButton
                label="Remove"
                variant="text"
                onClick={props.onClickRemove}
              ></AddButton>
            </div>
            <div>
              <ListItemText secondary={toDo.date}></ListItemText>
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Todo;
