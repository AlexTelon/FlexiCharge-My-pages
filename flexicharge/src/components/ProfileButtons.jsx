const ProfileButtons = (props) => {
  return (
    <div className={props.classes.buttonContainer}>
      <form action="" method="post">
        <button className={props.classes.changeButton} type="submit">
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

export default ProfileButtons;
