import React from 'react';
import Typography from '@material-ui/core/Typography';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      image: {
        backgroundImage: 'url(https://s3.amazonaws.com/key-up-assets/Copy-of-Home-Page-Top-Image.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      foreground: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        color: 'white'
      }, 
      text: {
        textAlign: 'center',
        padding: '10vh 5vh'
      },
      blackBox: {
        backgroundColor: 'rgba(0,0,0,0.35)',
        width: '100%'
      }
    };

    return (
      <div style={style.image}>
        <div style={style.foreground}>
          <div style={style.blackBox}>
            <div style={style.text}>
              <Typography gutterBottom variant="headline" color='inherit'>
            Find your path to a solid career that doesn't require a 4-year degree
              </Typography>
              <Typography variant="subheading" color='inherit'>
            Find careers, training services, and support programs that can get you to the 
            middle class without a 4-year degree 
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;