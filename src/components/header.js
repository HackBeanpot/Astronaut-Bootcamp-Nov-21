import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import HBPLogo from "./logo";
import { Link } from "react-router-dom";
import MyButton from "./myButton"

const useStyles = makeStyles({
  header: {
    backgroundColor: "rgb(50,50,80)",
    height:"10vh"
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Link to="/">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.button}
          >
            <HBPLogo />
          </IconButton>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MiniHacks: Astronaut Bootcamp
        </Typography>
        <MyButton text="Home" path="/"></MyButton>
        <MyButton text="News" path="/news"></MyButton>
        <MyButton text="Explore" path="/explore"></MyButton>
        <MyButton text="Risk" path="/risk"></MyButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
