import { useHistory } from "react-router-dom";

const ProfileFromHandling = (props) => {
  const history = useHistory();

  return (
    <div className={props.classes.buttonContainer}>
      <form action="" method="post">
        <button
          className={props.classes.changePasswordButton}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            history.push("/change-password");
          }}
        >
          Change password
        </button>
      </form>
      <form action="" method="post">
        <button className={props.classes.deleteButton} type="submit">
          Delete profile
        </button>
      </form>
    </div>
  );
};

export default ProfileFromHandling;
