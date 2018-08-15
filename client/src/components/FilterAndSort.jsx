import React from 'react';
import FilterAndSortForm from './filterAndSortComponents/FilterAndSortForm.jsx';
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
            industries={this.props.industries}
            hideFilter={this.hideFilter}
            filterCareers={this.props.filterCareers}
          />) :
          (<Button 
            variant="contained"
            color="primary"
            onClick={this.displayFilter}
          >Filter And Sort</Button>)
        }
      </div>
    );
  }

}

export default withStyles(styles)(FilterAndSort);