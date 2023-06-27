import Button from "@mui/material/Button";

function AddButton(props) {
  return (
    <div>
      <Button
        startIcon={props.icon}
        variant={props.variant}
        style={{
          backgroundColor: props.backgroundColor,
          borderRadius: 0,
          color: props.color,
        }}
        onClick={props.onClick}
      >
        {props.label}
      </Button>
    </div>
  );
}

export default AddButton;
