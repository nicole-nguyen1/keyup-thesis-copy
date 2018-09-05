import React from 'react';
import Intro from './Intro.jsx';
import Financial from './Financial.jsx';
import About from './About.jsx';
import Needs from './Needs.jsx';
import ProsCons from '../careerProfileComponents/ProsCons.jsx';
import ApplicationProcess from './ApplicationProcess.jsx';
import AdviceFormContainer from '../../containers/AdviceFormContainer.jsx';
import FormSubmitted from '../homePageComponents/FormSubmitted.jsx';
import { Card, withStyles } from '@material-ui/core';

const styles = theme => ({
  profile: {
    [theme.breakpoints.up('sm')]: {
      width: '550px',
      margin: '0 auto'
    }
  },

  dark: {
    backgroundColor: '#232E49',
    borderRadius: 0,
    padding: '5px'
  }
});
class TrainingServiceProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openAdviceForm: false,
      adviceFormSubmitted: false
    };
  }

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  toggleAdviceForm = () => {
    this.setState({ openAdviceForm: !this.state.openAdviceForm});
  }

  toggleAdviceMessageSent = () => {
    this.setState({ adviceFormSubmitted: true });
  }

  handleClose = () => {
    this.setState({ adviceFormSubmitted: false });
  }

  render() {
    const { classes } = this.props;
    const service = this.props.service;

    return (
      <div className={classes.profile}>
        <Intro service={service}/>
        <About 
          service={service} 
          open={this.state.open} 
          toggleDialog={this.toggleDialog}
          toggleAdviceForm={this.toggleAdviceForm}
          favorites={this.props.favorites}
          removeFavorite={this.props.removeFavorite}
          addFavorite={this.props.addFavorite}
          handlePopUp={this.props.handlePopUp}
        />
        <AdviceFormContainer 
          service={service}
          toggleAdviceForm={this.toggleAdviceForm}
          dialogState={this.state.openAdviceForm}
          toggleAdviceMessageSent={this.toggleAdviceMessageSent}
        />
        <Card className={classes.dark}>
          <ProsCons info={service} />
        </Card>
        <Financial service={service}/>
        <Card className={classes.dark}>
          <Needs service={service} />
        </Card>
        <ApplicationProcess 
          service={service} 
          open={this.state.open} 
          toggleDialog={this.toggleDialog}
          toggleAdviceForm={this.toggleAdviceForm}
          favorites={this.props.favorites}
          removeFavorite={this.props.removeFavorite}
          addFavorite={this.props.addFavorite}
          handlePopUp={this.props.handlePopUp}
        />
        <FormSubmitted 
          open={this.state.adviceFormSubmitted}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TrainingServiceProfile);