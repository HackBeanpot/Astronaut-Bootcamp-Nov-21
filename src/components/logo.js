import React from "react";
import Logo from "../resources/logo.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    borderRadius: '30px'
  },
});

function HBPLogo(props) {
  const classes = useStyles();
  return (
    <img
      src={Logo}
      alt="HackBeanpot logo"
      width={props.width ? props.width : 50}
      height={props.heigh ? props.height : 50}
      className={classes.image}
    />
  );
}

export default HBPLogo;
