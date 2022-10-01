import TextField from "../components/TextField";

const PromptView = (props) => {
  return (
    <div className={`${props.classes.showPromptView} ${props.classes.hidden}`}>
      <form action="" method="POST">
        <TextField></TextField>
        <TextField></TextField>
        <div className={props.classes.buttonContainer}>
          <button className={props.classes.changeButton}>Change</button>
          <button className={props.classes.cancelButton}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PromptView;
