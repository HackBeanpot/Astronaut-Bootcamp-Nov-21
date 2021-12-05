import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles({
  header: {
    backgroundColor: "rgb(50,50,80)",
    height: "10vh",
  },
  button: {
    margin: 10,
  },
});

function MakeCard(props) {
  const classes = useStyles();
  return (
      <Card>
        <CardMedia
          style={{ height: 100, width: 200, paddingTop: "56%" }}
          alt = "puppy"
          component="img"
          image="./puppy.jpg"
        />
        <CardContent>Card Content</CardContent>
      </Card>
  );
}

function RiskPage() {
  const classes = useStyles();
  return (
    <div>
      <MakeCard></MakeCard>
    </div>
  );
}

export default RiskPage;
