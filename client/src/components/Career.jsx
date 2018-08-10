import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typeography from '@material-ui/core/Typography';

class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typeography>
              {this.props.career.name}
            </Typeography>
          </CardContent>
        </Card>
      </div>
    );
  }
} 

export default Career;