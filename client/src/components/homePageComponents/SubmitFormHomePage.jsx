import React from 'react';
import FormHomePage from './FormHomePage.jsx';
import FormSubmitted from './FormSubmitted.jsx';
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
      open: false
    }
    this.form = React.createRef();
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

  handleClose = () => {
    this.setState({ open: false })
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
      this.setState({ open: true });
    }

    this.refs.form.reset();
  }


  render() {
    return (
      <div>
        <FormHomePage
          submitForm={this.submitForm}
          handleChange={this.handleChange}
          ref={this.form}
        />
        <FormSubmitted
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default SubmitFormHomePage;