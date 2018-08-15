import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProsCons = (props) => {
  const styles = {
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
  }
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
              <div key={pro.id} style={styles.listItem}>
                <img
                  style={styles.bullets}
                  src='https://s3.amazonaws.com/key-up-assets/White-thumbs-up-symbol.png' />
                <Typography gutterBottom variant='body1' style={styles.lightTextList}>{pro.description}</Typography>
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
              <div key={con.id} style={styles.listItem}>
                <img
                  style={styles.bullets}
                  src='https://s3.amazonaws.com/key-up-assets/white-thumbs-down.png' />
                <Typography gutterBottom variant='body1' style={styles.lightTextList}>{con.description}</Typography>
              </div>
            )
          }) : null}
      </CardContent>
    </div>
  )
}

export default ProsCons;