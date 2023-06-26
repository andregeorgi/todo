import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function Todo(props) {
  console.log(props.contentTodo);
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={<span>{"#" + props.index}</span>}
            secondary={
              <p>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.contentTodo}
                </Typography>
              </p>
            }
          />
          <ListItemText secondary={props.date}></ListItemText>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
}

export default Todo;
