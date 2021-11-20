import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    color: "white",
  },
});

function RocketIcon(props) {
  const classes = useStyles();
  return <FontAwesomeIcon icon={faRocket} className={classes.image} />;
}

export default RocketIcon;
