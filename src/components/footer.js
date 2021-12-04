import React from "react";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles({
  footer: {
    width: "100%",
    minHeight: "20vh",
    backgroundColor: "rgb(50,50,80)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  button: {
    color : "black",
    background: "yellow",
    borderRadius: "150%",
  }
});

function MyIcons(params) {
  const classes = useStyles();
  return (
  <IconButton onClick = {() => {
    window.location.href = params.link
  }}>
    <params.icon fontsize = "large" className = {classes.button}></params.icon>
  </IconButton>
  );
}

function Footer() {
  const classes = useStyles();
  return <div className={classes.footer}>
    <div>
      <MyIcons icon = {InstagramIcon} link = "https://instagram.com"></MyIcons>
      <MyIcons icon = {GitHubIcon} link = "https://github.com/HackBeanpot/Astronaut-Bootcamp-Nov-21/"></MyIcons>
      <MyIcons icon = {FacebookIcon} link = "https://github.com/HackBeanpot/Astronaut-Bootcamp-Nov-21/"></MyIcons>
    </div>
  </div>;
}

export default Footer;
