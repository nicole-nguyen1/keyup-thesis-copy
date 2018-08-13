import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ListItem } from '../../../node_modules/@material-ui/core';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState( { anchorEl: null });
  };



  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.tools}>
            <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            >
              <MenuIcon image="image.png"/>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon className={classes.icon}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText inset primary="Home">
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon className={classes.icon}>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText inset primary="Browse Careers">
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon className={classes.icon}>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText inset primary="Get Recommendations">
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon className={classes.icon}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText inset primary="About KeyUp">
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon className={classes.icon}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText inset primary ="Contact KeyUp"> 
                </ListItemText>
              </MenuItem>
            </Menu>
            <Typography variant="display1" color="inherit">
              <Link to="/">
                <Button color="inherit">keyUp</Button>
              </Link>
              <Link to="/careers">
                <Button color="inherit">Temp link to career list</Button>
              </Link>
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flex}>
            Changing Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


NavBar.styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
    textAlign: 'right'
  },
  menuButton: {
    marginLeft: -12, 
    marginRight: 20,
  },
  tools: {
    display: 'flex'
  },
  icon: {}
  
};


// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(NavBar.styles)(withRouter(NavBar));
