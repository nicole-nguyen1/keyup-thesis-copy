import React from 'react';
import QualifyForm from './QualifyForm.jsx';
import Qualify from './Qualify.jsx';

class QualifyContainer extends React.Component {
  constructor(props) {
    super(props);
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
      }, console.log('Enabled!'))
    } else {
      this.setState({
        buttonStatus: true
      })
    }
  }

  submitForm = () => {
    console.log('clicked!', this.state)
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
        /> :
        <Qualify openForm={this.openForm} />
    );
  }
}

export default QualifyContainer;