import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class CareerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerState: false
    }
  }

  toggleDrawer = () => {
    this.setState({ drawerState: !this.state.drawerState })
  }

  render() {
    const styles = {
      card: {
        borderRadius: 0,
        padding: '5px'
      },

      cardAction: { 
        display: 'block', 
        textAlign: 'right',
        marginTop: '10px',
        padding: '0 10px 0 0' 
      },

      bullets: {
        position: 'relative',
        height: '1em',
        top: '2px',
        marginRight: '20px'
      },

      dark: {
        backgroundColor: '#232E49',
        borderRadius: 0,
        padding: '5px'
      },

      icon: {
        position: 'relative',
        top: '-4px',
        left: '10px',
        height: '1em'
      },

      lightText: {
        color: '#EDEDED'
      },

      lightTextList: {
        color: '#EDEDED',
        display: 'inline'
      },

      listItem: {
        margin: '10px 0'
      },

      link: {
        color: '#7A94F4'
      },

      shareTopRow: {
        width: '25px',
        height: '25px',
        padding: '12.5px'
      },

      shareBottomRow: {
        width: '50px',
        height: '50px'
      }
    }

    if (this.props.career) {
      return (
        <div>
          <Card style={{ borderRadius: 0 }}>
            <CardMedia
              image={this.props.career.profile_image_url}
              style={{ height: '35vh' }} />
            <CardActions style={styles.cardAction}>
              <Button>
                <Typography gutterBottom variant='body1' style={styles.link}>FIND TRAINING</Typography>
                <img src='https://s3.amazonaws.com/key-up-assets/Graduation-Cap-icon.png' style={styles.icon} />
              </Button>
              <Button onClick={this.toggleDrawer}>
                <Typography gutterBottom variant='body1' style={styles.link}>SHARE</Typography>
                <img src='https://s3.amazonaws.com/key-up-assets/Share-Symbol.png' style={styles.icon} />
              </Button>
            </CardActions>
            <CardContent style={{ paddingTop: 0 }}>
              <Typography gutterBottom variant='headline'>{this.props.career.name}</Typography>
              <Typography variant='body1'>{this.props.career.description}</Typography>
            </CardContent>
          </Card>
          <Drawer
            anchor="bottom"
            open={this.state.drawerState}
            onClose={this.toggleDrawer}
            style={{ textAlign: 'center' }}
          >
            <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
              <Grid item xs={4}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                <img src='https://s3.amazonaws.com/key-up-assets/facebook-logo-true.png' style={styles.shareTopRow}/>
                <Typography variant='caption'>Facebook</Typography>
              </Grid>
              <Grid item xs={4}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                <img src='https://s3.amazonaws.com/key-up-assets/Twitter-Logo-True.png' style={styles.shareTopRow} />
                <Typography variant='caption'>Twitter</Typography>
              </Grid>
              <Grid item xs={4}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                <img src='https://s3.amazonaws.com/key-up-assets/Reddit-logo-true.png' style={styles.shareTopRow} />
                <Typography variant='caption'>Reddit</Typography>
              </Grid>
            </div>
            <div style={{ display: 'inline-flex', margin: '20px 5px' }}>
              <Grid item xs={4}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                <img src='https://s3.amazonaws.com/key-up-assets/Email-Icon.png' style={styles.shareBottomRow}/>
                <Typography variant='caption'>Email</Typography>
              </Grid>
              <Grid item xs={4}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                <img src='https://s3.amazonaws.com/key-up-assets/Text-Icon.png' style={styles.shareBottomRow}/>
                <Typography variant='caption'>Text</Typography>
              </Grid>
              <Grid item xs={4}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                <img src='https://s3.amazonaws.com/key-up-assets/Link-symbol-black.png' style={styles.shareBottomRow}/>
                <Typography variant='caption'>Copy Link</Typography>
              </Grid>
            </div>
          </Drawer>
          <Card style={styles.dark}>
            <CardContent>
              <Typography gutterBottom variant='title' style={styles.lightText}>Average Earnings</Typography>
              <Typography variant='body1' style={styles.lightText}>
                <span style={{ color: '#1DCD8C' }}>{this.props.career.annual_salary}</span> or {this.props.career.hourly_pay}/hr
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant='title' style={styles.lightText}>Job Openings</Typography>
                {this.props.career.openings ?
                  <div>
                    <Typography variant='body1' style={styles.lightText}>
                      <span style={{ color: '#1DCD8C' }}>{this.props.career.openings.split(': ')[0]}&#58;</span><span> {this.props.career.openings.split(': ')[1]}</span>
                    </Typography>
                  </div> : null }
            </CardContent>
          </Card>
          <Card style={styles.card}>
            <CardContent>
              <Typography variant='title'>Typical Tasks</Typography>
                {this.props.career.tasks ? 
                  this.props.career.tasks.map((task) => {
                    return (
                      <div key={task.id} style={styles.listItem}>
                        <img
                          style={styles.bullets}
                          src='https://s3.amazonaws.com/key-up-assets/Checkbox-for-Typical-Tasks-Icon.png' />
                        <Typography gutterBottom variant='body1' style={{ display: 'inline' }}>{task.description}</Typography>
                      </div>
                    )
                  }) : null}
            </CardContent>
            <CardContent>
              <Typography variant='title'>Skills Needed</Typography>
              {this.props.career.skills ? 
                this.props.career.skills.map((skill) => {
                  return (
                    <div key={skill.id} style={styles.listItem}>
                      <img
                        style={styles.bullets}
                        src='https://s3.amazonaws.com/key-up-assets/Head-Symbol.png' />
                      <Typography gutterBottom variant='body1' style={{ display: 'inline' }}>{skill.description}</Typography>
                    </div>
                  )
                }) : null}
            </CardContent>
          </Card>
          <Card style={styles.dark}>
            <CardContent>
              <Typography gutterBottom variant='title' style={styles.lightText}>Job Satisfaction</Typography>
              <Typography variant='subheading' style={{
                color: '#1DCD8C',
                textAlign: 'center'
              }}>PROS</Typography>
              {this.props.career.pros ? 
                this.props.career.pros.map((pro) => {
                  return (
                    <div key={pro.id} style={styles.listItem}>
                      <img
                        style={styles.bullets}
                        src='https://s3.amazonaws.com/key-up-assets/White-thumbs-up-symbol.png' />
                      <Typography gutterBottom variant='body1' style={styles.lightTextList}>{pro.description}</Typography>
                    </div>
                  )
                }) : null }
            </CardContent>
            <CardContent>
              <Typography variant='subheading' style={{
                color: '#E9DC00',
                textAlign: 'center'
              }}>CONS</Typography>
              {this.props.career.cons ? 
                this.props.career.cons.map((con) => {
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
          </Card>
          <Card style={styles.card}>
            <CardContent>
              <Typography gutterBottom variant='title'>Training</Typography>
              <Typography gutterBottom variant='body1'>{this.props.career.number_of_services} training services in Austin</Typography>
              <Typography gutterBottom variant='body1'><strong>Length:</strong> {this.props.career.training_length}</Typography>
              <Typography gutterBottom variant='body1'><strong>Hours:</strong> {this.props.career.training_hours}</Typography>
              <Typography variant='body1'><strong>Cost Range:</strong> {this.props.career.training_cost}</Typography>
            </CardContent>
            <CardActions style={{ margin: '0px auto 10px' }}>
              <Button variant="contained" color="primary" style={{ margin: '0px auto 10px' }}>
                SEE TRAINING SERVICES
              </Button>
            </CardActions>
          </Card>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default CareerProfile;