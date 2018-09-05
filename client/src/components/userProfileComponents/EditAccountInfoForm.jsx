import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { store } from '../../store/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPageTitle, findUser } from '../../actions/action.js';
import { updateInfo } from '../graphql/graphql.js';
import { createApolloFetch } from 'apollo-fetch';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  inputStyle: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '89vw',
    maxWidth: '350px'
  },
  buttonStyle: {
    backgroundColor: '#4469FF',
    color: 'white',
    borderRadius: 0,
    marginTop: '2em'
  },
  paper: {
    top: '56px',
    backgroundColor: 'EDEDEE',
    padding: '30px 10px'
  },
  header: {
    paddingTop: '20px',
    fontWeight: 'bold'
  },
  fieldError: {
    backgroundColor: 'white',
    margin: '5px 10px 5px 0',
    padding: '10px',
    width: '89vw',
    maxWidth: '350px',
    border: '2px solid red'
  },
  check: {
    color: 'green'
  },
  error: {
    color: 'red'
  }
});

class EditAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '/graphql'
    }).bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      zip: '',
      buttonDisabled: true,
      redirect: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Edit Account Info'));
    this.props.getUser();
  }

  componentDidUpdate(prevProps) {
    let zip;
    if (this.props.user.zip === null) {
      zip = '';
    }
    if (this.props.user !== prevProps.user) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        phone_number: this.props.user.phone_number,
        zip: this.props.user.zip
      });
    }
  }

  handleChange = (e) => {
    let thisState = {};
    thisState[e.target.name] = e.target.value;
    this.setState(thisState, this.enableButton);
  }

  enableButton = () => {
    if (this.state.first_name && this.state.last_name && this.state.email) {
      this.setState({
        buttonDisabled: false
      });
    }
  }

  onSubmit = () => {
    let token = JSON.stringify(localStorage.getItem('jwt'));
    let email = JSON.stringify(this.state.email);
    let first_name = JSON.stringify(this.state.first_name);
    let last_name = JSON.stringify(this.state.last_name);
    let phone_number = JSON.stringify(this.state.phone_number);
    let zip = JSON.stringify(this.state.zip);
    this.fetch({
      query: updateInfo({
        token,
        email,
        first_name,
        last_name,
        phone_number,
        zip
      })
    })
      .then(res => {
        store.dispatch(findUser(res.data.updateInfo));
        this.setState({ redirect: true });
      });
  }

  render() {
    const { classes } = this.props;
    const token = localStorage.getItem('jwt');
    
    if (token === null) {
      return (<Redirect to={{ pathname: '/home'}} />);
    }

    if (this.state.redirect === true) {
      return (<Redirect to={{ pathname: '/profile', state: { updatedInfo: true }}} />);
    }

    return (
      <div className={classes.paper}>
        <Typography variant='headline'>Edit Your Account Information</Typography>
        <Typography variant='body2' className={classes.header}>Name</Typography>
        <TextField
          autoFocus
          fullWidth
          required
          type="text"
          name="first_name"
          value={this.state.first_name}
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <TextField
          autoFocus
          fullWidth
          required
          type="text"
          name="last_name"
          value={this.state.last_name}
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <Typography variant='body2' className={classes.header}>Contact Information</Typography>
        <TextField
          autoFocus
          fullWidth
          required
          type="email"
          name="email"
          value={this.state.email}
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <TextField
          autoFocus
          fullWidth
          type="text"
          name="phone_number"
          placeholder="Phone Number (optional)"
          value={this.state.phone_number}
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <Typography variant='body2' className={classes.header}>Zip Code</Typography>
        <TextField
          autoFocus
          fullWidth
          type="text"
          name="zip"
          placeholder="Zip Code (optional)"
          value={this.state.zip}
          className={classes.inputStyle}
          onChange={this.handleChange}
          InputProps={{
            disableUnderline: true
          }}
        />
        <Typography variant='caption'>We ask so we can recommend the training services and support programs closest to you</Typography>
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={this.onSubmit}
          disabled={this.state.buttonDisabled}
        >
          Save Changes
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages.page,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle, findUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditAccountForm));
