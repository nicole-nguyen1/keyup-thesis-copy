import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#232e49',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '40px 0',
    marginLeft: '-1px'
  },
  foreground: {
    width: '200px',
    borderRadius: '50%',
    height: '200px',
    margin: '0 auto',
    overflow: 'hidden'
  },
  icon: {
    color: 'white',
    fontSize: '150px'
  },
  text: {
    textAlign: 'center',
    padding: '10px',
    color: 'white'
  }
});
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.background}>
        <AccountCircleIcon className={classes.icon} />
        <div className={classes.text}>
          <Typography variant="headline" color='inherit'>
            {this.props.user.first_name}'s Profile
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);