import React from 'react';
import EnterEmail from '../components/passwordResetComponents/EnterEmail.jsx';
import { store } from '../store/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPageTitle } from '../actions/action';
import { createApolloFetch } from 'apollo-fetch';
import { findUserEmail } from '../components/graphql/graphql';

class EnterEmailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
    this.state = {
      email: '',
      buttonStatus: true,
      showError: false,
      redirect: false
    };
  }

  componentDidMount() {
    store.dispatch(getPageTitle('Reset Your Password'));
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    }, this.enableButton);
  }

  enableButton = () => {
    if (this.state.email.length) {
      this.setState({
        buttonStatus: false
      });
    } else {
      this.setState({
        buttonStatus: true
      });
    }
  }

  submitForm = () => {
    let email = JSON.stringify(this.state.email);
    this.fetch({
      query: findUserEmail(email)
    })
      .then((res) => {
        if (res.data.userEmail) {
          this.setState({
            buttonStatus: true,
            redirect: true
          });
          return res;
        } else {
          this.setState({
            showError: true
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <EnterEmail 
          handleEmailChange={this.handleEmailChange}
          email={this.state.email}
          redirect={this.state.redirect}
          submitForm={this.submitForm}
          buttonStatus={this.state.buttonStatus}
          showError={this.state.showError}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages.page
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPageTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterEmailContainer);