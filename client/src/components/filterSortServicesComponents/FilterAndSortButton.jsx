import React from 'react';
import FilterAndSortForm from './FilterAndSortForm.jsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  headerStyle: {
    backgroundColor: '#3652C5',
    padding: '8px',
    textAlign: 'center',
    marginLeft: '-1px'
  },

  button: {
    backgroundColor: 'b367c2',
    borderRadius: 0
  }
});

class FilterAndSortButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: false
    };
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
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.headerStyle}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.displayFilter}
            className={classes.button}
          >Filter And Sort</Button>
          <FilterAndSortForm
            services={this.props.services}
            careerName={this.props.careerName}
            careerID={this.props.careerID}
            hideFilter={this.hideFilter}
            open={this.state.showFilter}
          />
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(FilterAndSortButton);