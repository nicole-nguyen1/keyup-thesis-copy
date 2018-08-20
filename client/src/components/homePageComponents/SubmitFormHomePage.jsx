import React from 'react';
import axios from 'axios';
import FormHomePage from './FormHomePage.jsx';
import FormSubmited from './FormSubmited.jsx';

class SubmitFormHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailOrPhone: '',
      email: '',
      phone: '',
      message: '',
      messageSent: false
    }

    this.submitForm = this.submitForm.bind(this);
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

  async submitForm(e) {
    const { name, email, phone, message } = this.state; //sanitize inputs?
    const form = await axios.post('/api/form', { name, email, phone, message });
    if (form.status === 200) {
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