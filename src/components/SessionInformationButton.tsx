import shadows from "@material-ui/core/styles/shadows";
import React, { useState } from "react";
//import UpdateProfileInformation from "../components/UpdateProfileInformation";
import useStyles from "../components/styles/sessionInformationStyles";

const SessionInformationButton = (props: any) => {
  const classes = useStyles();

  const openModal = (id:  number) => {
    console.log(id);
    var modal = document.getElementById("modal-" + id) as HTMLInputElement;
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  const closeModal = (id: number) => {
    var modal = document.getElementById("modal-" + id) as HTMLInputElement;
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  // needs to be implemented when ids are set correctly
  /*window.onclick = function(event) {
    var modal = document.getElementById("modal") as HTMLInputElement;
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }*/

  return (
    <div style={{
      display: "inline-block",
    }}>
      <div>
        <a
          href="#"  
          onClick={e => openModal(props.id)}
          style={{
            width: "fit-content"
          }}
        >
          More Information about Session
        </a>
      </div>
        <div id={"modal-" + props.id} className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
          <span className={`${classes.close}`} onClick={e => closeModal(props.id)}>&times;</span>
          <p>[Information for Session {props.id}...]</p>
        </div>
      </div>
    </div>
  );
};

export default SessionInformationButton
