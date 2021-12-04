import React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
    background: "yellow",
    borderRadius: "50%",
    width: 100,
  }, 
  icon: {
    width:100,
  }
});

function MyIcon(props) {
  const classes = useStyles();
  return (
    <a href={props.url}>
      <IconButton className={classes.icon}>
        {props.icon}
      </IconButton>
    </a>
  )
}

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div>
        <MyIcon
          url="instagram.com/HackBeanpot"
          icon={
            <InstagramIcon
              fontSize="large"
              className={classes.button}>
            </InstagramIcon>
          }></MyIcon>
          <MyIcon
          url="facebook.com"
          icon={
            <FacebookIcon
              fontSize="large"
              className={classes.button}>
            </FacebookIcon>
          }></MyIcon>
      </div>
    </div>
  )
}

export default Footer;