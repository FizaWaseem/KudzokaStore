import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { InputWithIcon } from "../../../Components/Search/search";
import Classes from "./changepassword.module.css";
import Grid from "@material-ui/core/Grid";
// import password from "../../assets/images/login/password.svg";

import { NavLink } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "38%",
    border:"none",
    backgroundColor: "#ffff",
    color: "black",
    padding: theme.spacing(2, 4, 3),
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      width: "62%",
    },
  },
}));

const ChangePassword = ({ text }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [Password, setPassword] = React.useState("");

  console.log(Password);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p className={Classes.logintext}>Change Password</p>
      <p className={Classes.heading}>Old Password</p>
      <div className={Classes.textbox}>
        <InputWithIcon
          type="password"
          placeholder="Password"
          value={Password}
          onChange={setPassword}
          // ImgLeft={password}
         
        />
      </div>
      <p className={Classes.heading}>New Password</p>
      <div className={Classes.textbox}>
        <InputWithIcon
          type="password"
          placeholder="Password"
          value={Password}
          onChange={setPassword}
          // ImgLeft={password}
          // ImgRight={eye}
        />
      </div>
      <p className={Classes.heading}>Confirm Password</p>
      <div className={Classes.textbox}>
        <InputWithIcon
          type="password"
          placeholder="Password"
          value={Password}
          onChange={setPassword}
          // ImgLeft={password}
          // ImgRight={eye}
        />
      </div>
      <Grid className={Classes.Logindiv} container>
        <Grid item xs={6}>
          <button onClick={handleClose} Classes={Classes.loginbutton}>Continue</button>
        </Grid>
      </Grid>

    </div>
  );

  return (
    <>
      <span className={Classes.text} type="button" onClick={handleOpen}>
        {text}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};
export { ChangePassword };
