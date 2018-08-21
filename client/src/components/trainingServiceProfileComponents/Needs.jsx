import React from 'react';
import Typography from '@material-ui/core/Typography';

class Needs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      lightText: {
        color: '#EDEDED',
        margin: '20px 0 0 10px'
      },
      listItem: {
        margin: '10px 0'
      },
      lightTextList: {
        color: '#EDEDED',
        display: 'center',
        margin: '30px 0 30px 50px'
      }
    };
  
    return (
      <div >
        <Typography variant='title' style={styles.lightText}>
              To Get In, You Need...
        </Typography>    
        <div>
          {this.props.service.requirements && this.props.service.requirements.map(requirement => {
            return (
              <div key={requirement.id} style={styles.listItem}>
                <Typography variant='body1' style={styles.lightTextList}>
                  {requirement.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Needs;

