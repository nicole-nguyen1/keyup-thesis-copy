import React from 'react';
import Career from './Career.jsx';
import Grid from '@material-ui/core/Grid';

class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          {this.props.careers.map((career, index) => {
            return <Career key={index} career={career} />;
          })}
        </Grid>
      </div>
    );
  }
}



export default Careers;
