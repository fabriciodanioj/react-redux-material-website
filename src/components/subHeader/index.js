import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

export default function SubHeader() {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  );
}
