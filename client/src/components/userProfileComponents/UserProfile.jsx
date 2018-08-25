import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { store } from '../../store/index';
import { connect } from 'react-redux';

const styles = theme => ({
  background: {
    backgroundColor: '#232e49',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '80px 0 0 0'
  },
  foreground: {
    width: '200px',
    borderRadius: '50%',
    height: '200px',
    margin: "0 auto",
    overflow: 'hidden'
  },
  icon: {
    color: 'white',
    fontSize: '150px'
  },
  text: {
    textAlign: 'center',
    padding: '10vh 5vh',
    color: 'white'
  }
});
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { classes } = this.props;
    const user = (store.getState()).user;

    return (
      <div className={classes.background}>
        <AccountCircleIcon className={classes.icon} />
        <div className={classes.text}>
          <Typography variant="headline" color='inherit'>
            {user.first_name}'s Profile
          </Typography>
        </div>
      </div>
    )
  }
}

export default connect()(withStyles(styles)(UserProfile));