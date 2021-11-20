import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const handleClick = () => {
  return;
}

const MyButton = (props) => {
  return (
    <Link to={props.path}>
      <Button variant="contained" onClick={handleClick}>
        {props.text}
      </Button>
    </Link>
  );
}

export default MyButton;
