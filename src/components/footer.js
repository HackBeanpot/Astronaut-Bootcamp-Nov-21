import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    minHeight: "20vh",
    backgroundColor: "rgb(50,50,80)",
  },
});
function Footer() {
  const classes = useStyles();
  return <div className={classes.footer}></div>;
}

export default Footer;
