import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";

import { startLogin, startLogout } from "../actions/auth";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes, isTrainer } = props;
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon onClick={props.toggleDrawer} />
          </IconButton>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Personal Trainer Appointment System {isTrainer ? '(Trainer Mode)':'(Client Mode)'}
          </Typography>
          {!props.isAuth ? (
            <Button color="inherit" onClick={props.startLogin}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={props.startLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStatToProps = state => ({
  isAuth: !!state.auth.uid,
  isTrainer: !!state.auth.isTrainer
});

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout())
  };
};

export default withStyles(styles)(
  connect(
    mapStatToProps,
    mapDispatchToProps
  )(ButtonAppBar)
);
