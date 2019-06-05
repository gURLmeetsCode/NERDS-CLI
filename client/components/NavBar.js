import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import Login from './Login'
import UserPage from './UserPage'
import SignUpForm from './SignUp'


const styles = {
  root: {
    flexGrow: 1,
  }
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function NavBar(props) {
  const { classes } = props;
  const classes2 = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="nav-bar">
            <Link component={RouterLink} to="/" variant="h6" color="inherit">
              Home
            </Link>
            <hr />
            <Link component={RouterLink} to="/signup" variant="h6">
              <Button variant="outlined" id="signup-btn" className={classes2.button}>
                SignUp
              </Button>
            </Link>
            <hr />
            <Link component={RouterLink} to="/login" variant="h6">
              <Button variant="contained" id="login-btn" className={classes2.button}>
                Login
              </Button>
            </Link>
            <hr />
          </Toolbar>
        </AppBar>
        <div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
