import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon image="image.png"/>
            </IconButton>
            <Button color="inherit">keyUp</Button>
            <Typography variant="title" color="inherit" className={classes.flex}>
            Careers
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


NavBar.styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12, 
    marginRight: 20,
  },
};


// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(NavBar.styles)(NavBar);