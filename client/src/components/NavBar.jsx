import React from 'react';

// GRAPHQL
import { createApolloFetch } from 'apollo-fetch';

// COMPONENTS
import LogoutDialog from './LogoutDialog.jsx';

// REACT ROUTER
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { HashLink } from 'react-router-hash-link';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import { getPageTitle, findUser, getFavorites, findCareers } from '../actions/action';

// STYLING
import { AppBar, Button, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);

    this.state = {
      anchorEl: null,
      confirmLogout: false
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  confirmClose = () => {
    this.setState({ confirmLogout: false });
  }

  handleSignOut = () => {
    localStorage.removeItem('jwt');
    const nullObj = {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      phone_number: ''
    };
    const nullFaves = {
      id: '',
      career_id: '',
      service_id: ''
    };
   
    store.dispatch(findUser(nullObj));
    store.dispatch(getFavorites(nullFaves));
    this.props.toggle();
    this.handleClose();
    this.setState({ confirmLogout: true });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.tools}>
            <Grid container className={classes.grid}>
              <Grid item xs={1} sm={1} className={classes.home}>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MenuIcon image="#" />
                </IconButton>
                <HashLink style={{ textDecoration: 'none' }} scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#intro">
                  <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/KeyUp-Logo-all-white.png' height='25px' style={{ position: 'relative', top: '12px' }} />
                </HashLink>
              </Grid>
              <Grid item xs={9} sm={11} className={classes.pageTitle}>
                <Typography variant="subheading" color="inherit" className={classes.flex}>
                  {this.props.pages}
                </Typography>
              </Grid>
            </Grid>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              PopoverClasses={{ paper: `${classes.menu}` }}
              className={classes.top}
            >
              <div className={classes.menuTop}>
                {this.props.showAccountInfo ?
                  (<div className={classes.menuTopItems}>
                    <Typography variant="body1" align="center" style={{ color: '#02ED96', marginBottom: '10px' }}>
                      Account
                    </Typography>
                    <Typography variant="body1" align="center" style={{ color: 'white' }}>
                      {this.props.user.email || null}
                    </Typography>
                  </div>) :
                  (<div className={classes.menuTopItems}>
                    <Link to="/login" className={classes.link}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonStyle}
                        onClick={this.handleClose}
                      >
                          SIGN IN
                      </Button>
                    </Link>
                    <Link to='/signup' className={classes.link}>
                      <Typography onClick={this.handleClose} style={{ color: 'white' }}>
                          Create an account
                      </Typography>
                    </Link>
                  </div>)
                }
              </div>
              <MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <HashLink style={{ textDecoration: 'none' }} scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#intro">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="Home">
                  </ListItemText>
                </HashLink>
              </MenuItem>
              {this.props.showProfile ? (<MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <Link to="/profile">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="My Profile">
                  </ListItemText>
                </Link>
              </MenuItem>) : null}
              {this.props.showFavorites ? (<MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <Link to="/favorites">
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="My Favorites">
                  </ListItemText>
                </Link>
              </MenuItem>) : null}
              <MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <Link to="/careers">
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="Browse Careers">
                  </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <a style={{ textDecoration: 'none' }} href='https://keyup.typeform.com/to/dlfXQi'>
                  <ListItemIcon style={{ position: 'relative', top: '4px' }}>
                    <ChatIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Get Recommendations" style={{ position: 'relative', top: '-4px', display: 'inline-flex' }}>
                  </ListItemText>
                </a>
              </MenuItem>
              <MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <HashLink style={{ textDecoration: 'none' }} scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#about">
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="About KeyUp">
                  </ListItemText>
                </HashLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose} classes={{ root: classes.menuItem }}>
                <HashLink scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#contact">
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="Contact KeyUp">
                  </ListItemText>
                </HashLink>
              </MenuItem>
              {this.props.showSignOutButton ? 
                (<Link to="/home" className={classes.link} >
                  <MenuItem onClick={this.handleSignOut} classes={{ root: classes.menuItem }}>
                    <ListItemIcon>
                      <img src='https://s3.us-east-2.amazonaws.com/keyup-assets/Sign-out-gray.png' className={classes.logoutIcon}/>
                    </ListItemIcon>
                    <ListItemText style={{ float: 'right' }} inset primary="Sign Out">
                    </ListItemText>
                  </MenuItem>
                </Link>) : null
              }
            </Menu>
          </Toolbar>
        </AppBar>
        <LogoutDialog 
          open={this.state.confirmLogout}
          onClose={this.confirmClose}
        />
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
    marginLeft: -12
  },
  menu: {
    top: '0!important',
    left: '0!important',
    borderRadius: '0',
    paddingBottom: '30px',
    width: '304px'
  },
  menuItem: {
    whiteSpace: 'unset'
  },
  tools: {
    top: 0,
    left: 0,
    borderRadius: 0,
    display: 'flex',
    backgroundColor: '#4469FF'
  },
  grid: {
    display: 'table'
  },
  home: {
    display: 'flex'
  },
  pageTitle: {
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '5px 0 5px 20px'
  },
  menuTop: {
    background: '#232E49',
    backgroundColor: '#232E49',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    height: '100%',
    marginBottom: '1em',
    outline: 'none',
    border: 'none!important',
    display: 'table',
    width: '100%',
    padding: '25px 0'
  },

  menuTopItems: {
    display: 'table-cell'
  },

  top: {
    marginTop: '-10px'
  },

  link: {
    textDecoration: 'none'
  },

  buttonStyle: {
    backgroundColor: '#1DCD8C',
    borderRadius: 0,
    marginBottom: '1em',
    textDecoration: 'none',
    borderRadius: '2px'
  },

  logoutIcon: {
    height: '24px',
    width: '24px',
    marginLeft: '3px',
    marginRight: '13px'
  },

  logoutStyles: {
    padding: '2em',
    background: '#232E49',
    backgroundColor: '#232E49'
  }

};

const mapStateToProps = state => {
  return {
    pages: state.pages.page,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle, findUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(NavBar.styles)(withRouter(NavBar)));
