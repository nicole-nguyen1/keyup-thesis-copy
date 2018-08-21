import React from 'react';
import Intro from './Intro.jsx';
import Financial from './Financial.jsx';
import About from './About.jsx';
import Needs from './Needs.jsx';
import ProsCons from '../careerProfileComponents/ProsCons.jsx';
import ApplicationProcess from './ApplicationProcess.jsx';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
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
      open: false
    };
  }

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const service = this.props.service;
    return (
      <div>
        <Intro service={service}/>
        <About service={service} open={this.state.open} toggleDialog={this.toggleDialog}/>
        <Card className={classes.dark}>
          <ProsCons info={service} />
        </Card>
        <Financial service={service}/>
        <Card className={classes.dark}>
          <Needs service={service} />
        </Card>
        <ApplicationProcess service={service} open={this.state.open} toggleDialog={this.toggleDialog}/>
      </div>
    );
  }
}

export default withStyles(styles)(TrainingServiceProfile);