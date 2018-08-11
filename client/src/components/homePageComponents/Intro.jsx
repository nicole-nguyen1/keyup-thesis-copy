import React from 'react';
import Typeography from '@material-ui/core/Typography';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      image: {
        backgroundImage: 'url(https://s3.amazonaws.com/key-up-assets/Copy-of-Home-Page-Top-Image.jpg)',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      foreground: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        color: 'white'
      }, 
      text: {
        textAlign: 'center',
        margin: '0 10vw',
        padding: '20vh 0'
      }
    };

    return (
      <div style={style.image}>
        <div style={style.foreground}>
          <div style={style.text}>
            <Typeography variant="display3" color='inherit'>
            Find your path to a solid career that doesn't require a 4-year degree
            </Typeography>
            <Typeography variant="headline" color='inherit'>
            Find careers, training services, and support programs that can get you to the 
            middle class without a 4-year degree 
            </Typeography>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;