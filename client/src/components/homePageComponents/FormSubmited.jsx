import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cardStyle: {
    background: 'purple',
    borderRadius: '0'
  },
  cardContentStyle: {
    maxWidth: '400px',
    margin: '0 auto'
  },
  textStyle: {
    color: 'white'
  }
});

class FormHomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Card className={classes.cardStyle}>
        <CardContent className={classes.cardContentStyle}>
          <Typography
            variant="headline"
            className={classes.textStyle} 
            gutterBottom
          >
            Your message was successfully sent.
          </Typography>
          <Typography className={classes.textStyle} gutterBottom>
            We'll get back to you within 24 hours!
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FormHomePage);
