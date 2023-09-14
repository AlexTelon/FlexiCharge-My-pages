import useStyles from "../styles/profileInformationStyles";
import AuthService from "../AuthService";
import { ValidationForm } from "../../utils/pageValidation/validation";

const ProfileInformation = (props: any) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.profileElements}>{props.label}</div>
        <div className={classes.description}>{props.descript}</div>
      </div>
    </div>
  );
};

export default ProfileInformation;
