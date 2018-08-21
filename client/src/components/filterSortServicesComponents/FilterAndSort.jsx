import React from 'react';
import FilterAndSortForm from './FilterAndSortForm.jsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  headerStyle: {
    textAlign: 'center'
  },
  groupStyle: {
    fontSize: '12px'
  },
  formStyle: {
    padding: '10px',
    maxWidth: '400px'
  }
});

class FilterAndSort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: false
    }
  }

  displayFilter = () => {
    this.setState({
      showFilter: true
    });
  }

  hideFilter = () => {
    this.setState({
      showFilter: false
    });
  }

  render() {
    return (
      <div>
        {this.state.showFilter ?
          (<FilterAndSortForm 
            services={this.props.services}
            careerName={this.props.careerName}
            hideFilter={this.hideFilter}
            careerID={this.props.careerID}
          />) :
          (<Button 
            variant="contained"
            color="primary"
            onClick={this.displayFilter}
            style={{backgroundColor: 'b367c2'}}
          >Filter And Sort</Button>)
        }
      </div>
    );
  }

}

export default withStyles(styles)(FilterAndSort);