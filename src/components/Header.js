import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "./AppBar";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const { isAuth } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          {isAuth && (
            <ListItem button>
              <Link to="/myappointments">
                <ListItemText primary="My Appointments" />
              </Link>
            </ListItem>
          )}
          {isAuth && (
            <ListItem button>
              <Link to="/createappointments">
                <ListItemText primary="Create Appointments" />
              </Link>
            </ListItem>
          )}
          {isAuth && (
            <ListItem button>
              <Link to="availableappointments">
                <ListItemText primary="Available Appointments" />
              </Link>
            </ListItem>
          )}
        </List>
      </div>
    );

    return (
      <div>
        <AppBar toggleDrawer={this.toggleDrawer("left", true)} />
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.uid
});

export default withStyles(styles)(connect(mapStateToProps)(TemporaryDrawer));
