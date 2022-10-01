import { ReactComponent } from "../assets/editIcon.svg";

const ProfileElements = (props) => {
  return (
    <div className={props.classes.profile__items}>
      <div className={`${props.classes.profileInfo}`}>{props.children}</div>
      <div className={props.classes.profileDescription}>{props.items}</div>
      <div>
        <form action="" method="post">
          <button type="submit">
            <ReactComponent />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileElements;
