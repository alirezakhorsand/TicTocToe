import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Tic-Tac-Toe
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
