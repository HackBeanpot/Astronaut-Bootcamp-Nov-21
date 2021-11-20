import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  cell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
  },
});

function ExamplePage(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.cell}>
          test
        </Grid>
        <Grid item xs={4} className={classes.cell}>
          component
        </Grid>
        <Grid item xs={4} className={classes.cell}>
          spacing
        </Grid>
        <Grid item xs={8} className={classes.cell}>
          responsive
        </Grid>
      </Grid>
    </div>
  );
}

export default ExamplePage;
