import TextField from "../components/TextField";

const PromptView = (props) => {
  return (
    <div className={`${props.classes.showPromptView} ${props.classes.hidden}`}>
      <TextField></TextField>
      <TextField></TextField>
      <div className={props.classes.buttonContainer}>
        <div className={props.classes.changeButton}>Change</div>
        <div className={props.classes.cancelButton}>Cancel</div>
      </div>
    </div>
  );
};

export default PromptView;
