import React from 'react';
import Typography from '@material-ui/core/Typography';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      background: {
        backgroundColor: '#232e49',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '80px 0 0 0'
      },
      foreground: {
        width: '200px',
        borderRadius: '50%',
        height: '200px',
        position: 'center'
      }, 
      text: {
        textAlign: 'center',
        padding: '10vh 5vh',
        color: 'white'
      }
    };
    return (
      <div style={style.background}>
        <img 
          src={this.props.service.logo_url}
          style={style.foreground}
        />
        <div style={style.text}>
          <Typography variant="headline" color='inherit'>
            {this.props.service.name}
          </Typography>
          <Typography variant="subheading" color='inherit'>
            {this.props.service.subheading}
          </Typography>
        </div>
      </div>
    );
  }
}

export default Intro;