import React from 'react';
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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import { getPageTitle } from '../actions/action';




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

  handleBrowseCareersClick = () => {
    this.handleClose();
    store.dispatch(getPageTitle('Career List'));
    console.log('you are awesome', store.getState());
  }

  handleHomeInsidePopUpMenuClick = () => {
    this.handleClose();
    store.dispatch(getPageTitle(''));
  }

  handleKeyUpClick = () => {
    store.dispatch(getPageTitle(''));
  }

  // handleScrollClick = section => {
  //   this.handleClose();
  //   console.log('document', document)
  //   window.onload = function() {
  //   document.getElementById(section).scrollIntoView();
  //   }
  // }



  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.tools}>
            <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            >
              <MenuIcon image="#"/>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleHomeInsidePopUpMenuClick}>
                <Link to="/">
                <ListItemIcon className={classes.icon}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText style={{float:'right'}}inset primary="Home">
                </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleBrowseCareersClick}>
                <Link to="/careers">
                <ListItemIcon className={classes.icon}>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText style={{float:'right'}}inset primary="Browse Careers">
                </ListItemText>
                </Link>
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
                <Button onClick={this.handleKeyUpClick} className={classes.home}>keyUp</Button>
              </Link>
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flex}>
            {this.props.pages}
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
    display: 'flex',
    backgroundColor: '2979ff'
  },
  icon: {},
  home: {
    color: '#ffffff',
    textDecoration: 'none'
  }
  
};

const mapStateToProps = state => {
  return {
    pages: state.pages.page
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(NavBar.styles)(withRouter(NavBar)));
