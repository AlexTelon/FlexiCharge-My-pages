import React, { useState } from "react";
import UpdateProfileInformation from "../components/UpdateProfileInformation";

const UpdateProfileButton = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleCheck = () => {
    setIsOpen(() => !isOpen);
    !isOpen
      ? console.log("Update form is open")
      : console.log("Update form is closed");
  };
  return (
    <div>
      <div>
        <button
          className={props.classes.editInformationButton}
          onClick={toogleCheck}
        >
          Update profile
        </button>
      </div>
      {isOpen && (
        <div>
          <UpdateProfileInformation
            user={props.user}
            className={props.classes}
          />
        </div>
      )}
    </div>
  );
};

export default UpdateProfileButton;
