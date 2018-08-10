import React from 'react';
import Career from './Career.jsx';
import Paper from '@material-ui/core/Paper';

class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Paper>
          {this.props.careers.map((career, index) => {
            return <Career key={index} career={career} />;
          })}
        </Paper>
      </div>
    );
  }
}



export default Careers;
