import React from 'react';
import QualifyForm from './QualifyForm.jsx';
import Qualify from './Qualify.jsx';
import { addFormData } from '../graphql/graphql';
import { createApolloFetch } from 'apollo-fetch';

class QualifyContainer extends React.Component {
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
      buttonStatus: true
    };
  }

  openForm = () => {
    this.setState({showForm: true});
  }

  closeForm = () => {
    this.setState({showForm: false})
  }

  handleChange = (e) => {
    let thisState = {};
    thisState[e.target.name] = e.target.value;
    this.setState(thisState, this.enableButton());
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
      this.state.emailOrPhone.length > 0  &&
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
      })
    } else {
      this.setState({
        buttonStatus: true
      })
    }
  }

  submitForm = () => {
    //add logic for email or phone
    let formArguments = {
      first_name: JSON.stringify(this.state.name.split(' ')[0]),
      last_name: JSON.stringify(this.state.name.split(' ').slice(1).join(' ')),
      email: JSON.stringify(this.state.emailOrPhone),
      phone_number: JSON.stringify(this.state.emailOrPhone),
      page: JSON.stringify("Training Service Profile"),
      career: JSON.stringify(this.props.service.career_name),
      training_service: JSON.stringify(this.props.service.name),
      financial_aid: this.state.financialAid,
      app_process: this.state.applicationProcess,
      talk_to_grad: this.state.talkToGrad,
      talk_to_working: this.state.talkToProfessional,
      other: this.state.other,
      message: JSON.stringify("some strange question")
    };
    this.fetch({
      query: addFormData(formArguments) 
    })
    .then(()=> {
      console.log('form data query resolved')
    })
    .catch((err)=>{console.log(err)})
  }

  render() {

    return (
      this.state.showForm ?
        <QualifyForm 
          service={this.props.service}
          handleChange={this.handleChange}
          setCheckbox={this.setCheckbox}
          buttonStatus={this.state.buttonStatus}
          submitForm={this.submitForm}
          closeForm={this.closeForm}
        /> :
        <Qualify openForm={this.openForm} />
    );
  }
}

export default QualifyContainer;