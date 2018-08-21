import React from 'react';
import FormHomePage from './FormHomePage.jsx';
import FormSubmited from './FormSubmited.jsx';
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
      messageSent: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'emailOrPhone') {
      if ((this.state.emailOrPhone).includes('@')) {
        this.setState({ 
          email: e.target.value,
          phone: ''
        });
      } else {
        this.setState({ 
          phone: e.target.value,
          email: ''
        });
      }
    }
  }

  submitForm = async () => {
    let formArguments = {
      first_name: JSON.stringify(this.state.name.split(' ')[0]),
      last_name: JSON.stringify(this.state.name.split(' ').slice(1).join(' ')),
      email: JSON.stringify(this.state.email),
      phone_number: JSON.stringify(this.state.phone),
      message: JSON.stringify(this.state.message),
      page: JSON.stringify("Homepage")
    }

    const form = await this.fetch({
      query: addFormData(formArguments)
    });

    if (form.data.saveContactForm.id) {
      this.setState({ messageSent: true });
    }
  }


  render() {
    return (
      this.state.messageSent ? <FormSubmited /> :
      <FormHomePage 
        submitForm={this.submitForm}
        handleChange={this.handleChange}
      />
    );
  }
}

export default SubmitFormHomePage;