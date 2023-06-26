import Button from "@mui/material/Button";

function AddButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#212d40" }}
        onClick={props.onClick}
      >
        {props.label}
      </Button>
    </div>
  );
}

export default AddButton;
