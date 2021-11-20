import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  cell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    padding: 0,
  },
});

function ExamplePage(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.cell}>
          <div>test</div>
        </Grid>
        <Grid item xs={4} className={classes.cell}>
          <div>component</div>
        </Grid>
        <Grid item xs={4} className={classes.cell}>
          <div>spacing</div>
        </Grid>
        <Grid item xs={8} className={classes.cell}>
          <div>responsive</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExamplePage;
