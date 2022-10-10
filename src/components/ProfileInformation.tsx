import useStyles from "./styles/profileInformationStyles";
import { ReactComponent } from "../assets/editIcon.svg";

const ProfileInformation = (props: any) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.profileElements}>{props.label}:</div>
        <div className={classes.description}>{props.descript}</div>
        <div className={classes.editImg}>
          <ReactComponent />
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
