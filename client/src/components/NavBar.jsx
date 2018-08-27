import React from 'react';
import { logout } from './graphql/graphql';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { store } from '../store/index';
import { getPageTitle, findUser } from '../actions/action';
import { HashLink } from 'react-router-hash-link';
import { createApolloFetch } from 'apollo-fetch';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);

    this.state = {
      anchorEl: null,
      user: {

      }
    };
  }

  componentDidMount() {
    this.props.getUser()
  }

  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignOut = () => {
    this.fetch({
      query: logout
    }).then(() => {
      const nullObj = {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        phone_number: ''
      };
      store.dispatch(findUser(nullObj))
    }).then(() => {
      this.props.toggle();
    })
    this.handleClose()
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const user = store.getState();
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
              <MenuIcon image="#" />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              PopoverClasses={{ paper: `${classes.menu}` }}
              className={classes.top}
            >
            {this.props.showAccountInfo ? 
                      (<div className={classes.logoutStyles}>
                      
                      <Typography variant="body1" align="center" style={{color: '#02ED96', marginBottom: '10px'}}>
                        Account
                      </Typography>
                      <Typography variant="body1" align="center" style={{color: 'white'}}>
                      {user.user.email}
                      </Typography>
                      
                      </div>) : 
              (<div className={classes.menuTop}>
                <Link to="/login">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonStyle}
                    onClick={this.handleClose}
                  >
                    SIGN IN
                  </Button>
                </Link>
                <Link to='/signup'>
                  <Typography onClick={this.handleClose} style={{ marginBottom: '3em' }} className={classes.menuTop}>
                    Create an account
                  </Typography>
                </Link>
              </div>)
              }
              <MenuItem onClick={this.handleClose}>
                <Link to="/home">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="Home">
                  </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/profile">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="My Profile">
                  </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/favorites">
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="My Favorites">
                  </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to="/careers">
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="Browse Careers">
                  </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <a style={{ textDecoration: 'none' }} href='https://keyup.typeform.com/to/dlfXQi'>
                  <ListItemIcon style={{ position: 'relative', top: '4px' }}>
                    <ChatIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Get Recommendations" style={{ position: 'relative', top: '-4px', display: 'inline-flex' }}>
                  </ListItemText>
                </a>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <HashLink style={{ textDecoration: 'none' }} scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#about">
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="About KeyUp">
                  </ListItemText>
                </HashLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <HashLink scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#contact">
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText style={{ float: 'right' }} inset primary="Contact KeyUp">
                  </ListItemText>
                </HashLink>
              </MenuItem>
              {this.props.showSignOutButton ? 
                      (<MenuItem onClick={this.handleSignOut}>
                      <Link to="/home">
                        <ListItemIcon>
                          <img src='https://s3.amazonaws.com/key-up-assets/Sign-out-gray.png' className={classes.logoutIcon}/>
                        </ListItemIcon>
                        <ListItemText style={{ float: 'right' }} inset primary="Sign Out">
                        </ListItemText>
                      </Link>
                    </MenuItem>) : null
              }
              
            </Menu>
            <Typography variant="display1" color="inherit">
              <HashLink style={{ textDecoration: 'none' }} scroll={el => el.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'nearest' })} to="/home#intro">
                <Button onClick={this.handleClose} className={classes.home}>
                  <img src='https://s3.amazonaws.com/key-up-assets/KeyUp-Logo-all-white.png' height='25px' />
                </Button>
              </HashLink>
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
    marginLeft: -12
  },
  menu: {
    top: '0!important',
    left: '0!important',
    borderRadius: '0',
    padding: '0'
  },
  tools: {
    top: 0,
    left: 0,
    borderRadius: 0,
    display: 'flex',
    backgroundColor: '#4469FF'
  },
  home: {
    padding: '0'
  },
  menuTop: {
    background: '#232E49',
    backgroundColor: '#232E49',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    margin: '0',
    height: '100px',
    marginBottom: '0em',
    height: '100%',
    outline: 'none',
    // marginTop: '-10px',
    padding: '0',
    border: 'none!important'
  },

  top: {
    marginTop: '-10px'
  },

  buttonStyle: {
    backgroundColor: '#1DCD8C',
    borderRadius: 0,
    marginTop: '3em',
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
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle, findUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(NavBar.styles)(withRouter(NavBar)));
