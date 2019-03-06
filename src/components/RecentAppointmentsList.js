import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 300,
    overflow: "auto"
  }
});

function RecentAppointmentsList(props) {
  const { classes, appointments } = props;
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Recently Added Appointments
      </Typography>
      <div className={classes.root}>
        <List component="nav">
          {appointments.map(appointment => (
            <ListItem button>
              <ListItemText primary={appointment} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

RecentAppointmentsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecentAppointmentsList);
