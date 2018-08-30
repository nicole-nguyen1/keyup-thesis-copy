import React from 'react';
import Intro from './Intro.jsx';
import Financial from './Financial.jsx';
import About from './About.jsx';
import Needs from './Needs.jsx';
import ProsCons from '../careerProfileComponents/ProsCons.jsx';
import ApplicationProcess from './ApplicationProcess.jsx';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core';
import AdviceFormContainer from './AdviceFormContainer.jsx';

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
      openQualifyContainer: false
    };
  }

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  toggleQualifyDialog = () => {
    this.setState({ openQualifyContainer: !this.state.openQualifyContainer})
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
          toggleQualifyDialog={this.toggleQualifyDialog}
          favorites={this.props.favorites}
          removeFavorite={this.props.removeFavorite}
          addFavorite={this.props.addFavorite}
        />
        <AdviceFormContainer 
          service={service}
          toggleQualifyDialog={this.toggleQualifyDialog}
          dialogState={this.state.openQualifyContainer}
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
          toggleQualifyDialog={this.toggleQualifyDialog}
          favorites={this.props.favorites}
          removeFavorite={this.props.removeFavorite}
          addFavorite={this.props.addFavorite}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TrainingServiceProfile);