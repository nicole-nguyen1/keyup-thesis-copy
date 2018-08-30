import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  bullets: {
    position: 'relative',
    height: '1em',
    top: '2px',
    marginRight: '20px'
  },

  lightTextList: {
    color: '#EDEDED',
    display: 'inline'
  },

  listItem: {
    margin: '10px 0'
  }
});

const ProsCons = (props) => {
  const { classes } = props;

  return (
    <div>
      <CardContent>
        <Typography variant='subheading' style={{
          color: '#1DCD8C',
          textAlign: 'center'
        }}>PROS</Typography>
        {props.info.pros ?
          props.info.pros.map((pro) => {
            return (
              <div key={pro.id} className={classes.listItem}>
                <img
                  className={classes.bullets}
                  src='https://s3.amazonaws.com/keyup-assets/White-thumbs-up-symbol.png' />
                <Typography gutterBottom variant='body1' className={classes.lightTextList}>{pro.description}</Typography>
              </div>
            )
          }) : null}
      </CardContent>
      <CardContent>
        <Typography variant='subheading' style={{
          color: '#E9DC00',
          textAlign: 'center'
        }}>CONS</Typography>
        {props.info.cons ?
          props.info.cons.map((con) => {
            return (
              <div key={con.id} className={classes.listItem}>
                <img
                  className={classes.bullets}
                  src='https://s3.amazonaws.com/keyup-assets/white-thumbs-down.png' />
                <Typography gutterBottom variant='body1' className={classes.lightTextList}>{con.description}</Typography>
              </div>
            )
          }) : null}
      </CardContent>
    </div>
  )
}

export default withStyles(styles)(ProsCons);