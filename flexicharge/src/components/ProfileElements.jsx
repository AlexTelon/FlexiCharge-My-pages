import { ReactComponent } from "../assets/editIcon.svg";

const ProfileElements = (props) => {
  console.log(props);
  return (
    <div className={props.classes.profile__items}>
      <div className={`${props.classes.profileInfo}`}>{props.children}</div>
      <div className={props.classes.profileDescription}>{props.items}</div>
      <div>
        <ReactComponent />
      </div>
    </div>
  );
};

export default ProfileElements;
