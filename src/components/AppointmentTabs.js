import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import SimpleList from "./SimpleList";

import "../styles/tabs.scss";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1100,
    margin: "auto"
  }
});

class AppointmentTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const days = [1, 2, 3, 4, 5, 6, 7];

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Monday" />
            <Tab label="Tuesday" />
            <Tab label="Wednesday" />
            <Tab label="Thursday" />
            <Tab label="Friday" />
            <Tab label="Saterday" />
            <Tab label="Sunday" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {days.map(day => (
            <TabContainer dir={theme.direction}>
              <div className="tabs-container">
                <SimpleList
                  day={day}
                  isAvailableAppointmentsPage={
                    this.props.isAvailableAppointmentsPage
                  }
                />
              </div>
            </TabContainer>
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

AppointmentTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppointmentTabs);
