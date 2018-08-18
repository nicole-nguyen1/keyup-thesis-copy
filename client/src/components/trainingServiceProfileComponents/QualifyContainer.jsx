import React from 'react';
import QualifyForm from './QualifyForm.jsx';
import Qualify from './Qualify.jsx';

class QualifyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  openForm = () => {
    console.log('button clicked')
    this.setState({showForm: true});
  }

  render() {

    return (
      this.state.showForm ?
        <QualifyForm service={this.props.service}/> :
        <Qualify openForm={this.openForm} />
    );
  }
}

export default QualifyContainer;