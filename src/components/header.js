import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import HBPLogo from "./logo";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  header: {
    backgroundColor: "rgb(50,50,80)",
    height: "10vh",
  },
  button: {
    margin: 10,
  }
});

function MyButton(props) {
  const classes = useStyles();
  return (
    <Link to={props.link}>
      <Button variant="outlined" className={classes.button}>{props.name}</Button>
    </Link>
  );
}

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
        <MyButton link="/" name="Home" > </MyButton>
        <MyButton link="/news" name="News"> </MyButton>
        <MyButton link="/explore" name="Explore"> </MyButton>
        <MyButton link="/risk" name="Risk"> </MyButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
