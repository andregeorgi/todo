import Button from "@mui/material/Button";

function AddButton(props) {
  return (
    <div>
      <Button variant="contained" style={{ backgroundColor: "#212d40" }}>
        {props.title}
      </Button>
    </div>
  );
}

export default AddButton;
