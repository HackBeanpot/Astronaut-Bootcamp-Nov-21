import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    minHeight: "20vh",
    backgroundColor: "rgb(50,50,80)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
});
function Footer() {
  const classes = useStyles();
  return <div className={classes.footer}>
    <div>
      
    </div>
  </div>;
}

export default Footer;
