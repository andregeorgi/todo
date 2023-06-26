import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";

function Todo(props) {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <span></span>
          </ListItemAvatar>
          <ListItemText
            primary={"#" + props.index}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.contentTodo}
                </Typography>
              </React.Fragment>
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
