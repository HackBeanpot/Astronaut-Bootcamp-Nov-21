import React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles({
  footer: {
    width: "100%",
    minHeight: "20vh",
    backgroundColor: "rgb(50,50,80)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "black",
    background: "#fad682",
    borderRadius: "20%",
  },
});

function MyIconButton(props) {
  const classes = useStyles();
  return (
    <a href={props.url}>
    <IconButton>
      {props.value}
    </IconButton>
    </a>
  );
}
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div>
        <MyIconButton
          url="https://www.instagram.com"
          value={<InstagramIcon className={classes.button}></InstagramIcon>}
        ></MyIconButton>
        <MyIconButton
          url="https://www.facebook.com/"
          value={<FacebookIcon className={classes.button}></FacebookIcon>}
        ></MyIconButton>
        <MyIconButton
          url="https://www.twitter.com"
          value={<TwitterIcon className={classes.button}></TwitterIcon>}
        ></MyIconButton>
      </div>
    </div>
  );
}

export default Footer;
