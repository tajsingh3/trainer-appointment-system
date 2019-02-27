import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import '../styles/appointment.scss';

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

const Appointment = props => {
  const { classes } = props;

  return (
    <div className='appointment-container'>
      <Typography variant="subtitle2" gutterBottom>
        {props.date.format('dddd, MMMM Do YYYY h:mm a')}
      </Typography>
      <Button variant="outlined" color="primary" className={classes.button}>
        Select
      </Button>
    </div>
  );
};

Appointment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Appointment);
