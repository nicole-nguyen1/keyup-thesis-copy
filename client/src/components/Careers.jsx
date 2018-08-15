import React from 'react';
import Career from './Career.jsx';
import Grid from '@material-ui/core/Grid';
import FilterandSort from './FilterAndSort.jsx';

class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FilterandSort industries={this.props.industries}/>
        <Grid container spacing={8}>
          {this.props.careers.map((career, index) => {
            return <Career key={career.id || index} career={career} />;
          })}
        </Grid>
      </div>
    );
  }
}



export default Careers;
