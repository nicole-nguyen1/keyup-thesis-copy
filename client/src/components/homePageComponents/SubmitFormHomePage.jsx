import React from 'react';
import FormHomePage from './FormHomePage.jsx';
import FormSubmitted from './FormSubmitted.jsx';
import SubmissionError from './SubmissionError.jsx';
import { addFormData } from '../graphql/graphql';
import { createApolloFetch } from 'apollo-fetch';

class SubmitFormHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
    this.state = {
      name: '',
      emailOrPhone: '',
      email: '',
      phone: '',
      message: '',
      open: false,
      submissionErr: false
    };
  }

  clearForm = () => {
    this.setState({
      name: '',
      emailOrPhone: '',
      message: ''
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'emailOrPhone') {
      if ((this.state.emailOrPhone).includes('@')) {
        this.setState({ 
          email: e.target.value,
          phone: null
        });
      } else {
        this.setState({ 
          phone: e.target.value,
          email: null
        });
      }
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleErrClose = () => {
    this.setState({ submissionErr: false });
  }

  submitForm = async () => {
    if (this.state.name && this.state.emailOrPhone && this.state.message) {
      let formArguments = {
        first_name: JSON.stringify(this.state.name.split(' ')[0]),
        last_name: JSON.stringify(this.state.name.split(' ').slice(1).join(' ')),
        email: JSON.stringify(this.state.email),
        phone_number: JSON.stringify(this.state.phone),
        message: JSON.stringify(this.state.message),
        page: JSON.stringify('Homepage')
      };

      const form = await this.fetch({
        query: addFormData(formArguments)
      });

      if (form.data.saveContactForm.id) {
        this.setState({ open: true }, this.clearForm());
      }
    } else {
      this.setState({ submissionErr: true });
    }
  }


  render() {
    return (
      <div>
        <FormHomePage
          submitForm={this.submitForm}
          handleChange={this.handleChange}
          name={this.state.name}
          emailOrPhone={this.state.emailOrPhone}
          message={this.state.message}
        />
        <FormSubmitted
          open={this.state.open}
          onClose={this.handleClose}
        />
        <SubmissionError 
          open={this.state.submissionErr}
          onClose={this.handleErrClose}
        />
      </div>
    );
  }
}

export default SubmitFormHomePage;