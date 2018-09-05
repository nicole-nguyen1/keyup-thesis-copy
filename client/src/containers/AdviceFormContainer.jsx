import React from 'react';
import AdviceForm from '../components/trainingServiceProfileComponents/AdviceForm.jsx';
import { addFormData } from '../components/graphql/graphql';
import { createApolloFetch } from 'apollo-fetch';

class AdviceFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = createApolloFetch({
      uri: '../graphql'
    }).bind(this);
    this.state = {
      showForm: false,
      name: '',
      emailOrPhone: '',
      message: '',
      financialAid: false,
      applicationProcess: false,
      talkToGrad: false,
      talkToProfessional: false,
      other: false,
      buttonStatus: true,
      formSubmitted: false
    };
  }

  openForm = () => {
    this.setState({showForm: true});
  }

  handleChange = (e) => {
    let thisState = {};
    thisState[e.target.name] = e.target.value;
    this.setState(thisState, this.enableButton()); //should enableButton be invoked here?
  }

  setCheckbox = (e) => {
    if (e.target.value === '0') {
      this.state.financialAid = !this.state.financialAid;
      this.enableButton();
    } else if (e.target.value === '1') {
      this.state.applicationProcess = !this.state.applicationProcess;
      this.enableButton();
    } else if (e.target.value === '2' ) {
      this.state.talkToGrad = !this.state.talkToGrad;
      this.enableButton();
    } else if (e.target.value === '3') {
      this.state.talkToProfessional = !this.state.talkToProfessional;
      this.enableButton();
    } else if (e.target.value === '4') {
      this.state.other = !this.state.other;
      this.enableButton();
    }
  }

  enableButton = () => {
    if (this.state.name.length > 0 &&
      this.state.emailOrPhone.length > 0 &&
      (
        this.state.financialAid ||
        this.state.applicationProcess ||
        this.state.talkToGrad ||
        this.state.talkToProfessional ||
        this.state.other
      )
    ) {
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
    let email = null;
    let phoneNumber = null;
    if (this.state.emailOrPhone.includes('@')) {
      email = JSON.stringify(this.state.emailOrPhone);
    } else {
      phoneNumber = JSON.stringify(this.state.emailOrPhone);
    }
    let formArguments = {
      first_name: JSON.stringify(this.state.name.split(' ')[0]),
      last_name: JSON.stringify(this.state.name.split(' ').slice(1).join(' ')),
      email: email,
      phone_number: phoneNumber,
      page: JSON.stringify('Training Service Profile'),
      career: JSON.stringify(this.props.service.career_name),
      training_service: JSON.stringify(this.props.service.name),
      financial_aid: this.state.financialAid,
      app_process: this.state.applicationProcess,
      talk_to_grad: this.state.talkToGrad,
      talk_to_working: this.state.talkToProfessional,
      other: this.state.other,
      message: JSON.stringify(this.state.message)
    };
    this.fetch({
      query: addFormData(formArguments) 
    })
      .then(()=> {
        this.setState({
          showForm: false,
          name: '',
          emailOrPhone: '',
          message: '',
          financialAid: false,
          applicationProcess: false,
          talkToGrad: false,
          talkToProfessional: false,
          other: false,
          buttonStatus: true,
          formSubmitted: true
        });
      })
      .then(() => {
        this.props.toggleAdviceMessageSent();
      })
      .catch((err)=> console.log(err));
  }

  closePopup = () => { 
    this.setState({
      formSubmitted: false
    });
  }

  render() {
    return (
      <AdviceForm 
        service={this.props.service}
        handleChange={this.handleChange}
        setCheckbox={this.setCheckbox}
        buttonStatus={this.state.buttonStatus}
        submitForm={this.submitForm}
        toggleAdviceForm={this.props.toggleAdviceForm}
        dialogState={this.props.dialogState}
      />
    );
  }
}

export default AdviceFormContainer;