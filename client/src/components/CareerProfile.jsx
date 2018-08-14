import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findCareer } from '../actions/action';
import { store } from '../store/index';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Check from '@material-ui/icons/CheckBoxOutlined';

class CareerProfile extends React.Component {
  constructor(props) {
    super(props);
    const career_id = +props.router.match.params.id || null;
    this.fetch = createApolloFetch({ uri: '../graphql' }).bind(this);
    this.state = {
      career_id
    }
  }

  componentDidMount() {
    this.fetch({
      query: `{
        career(id:${this.state.career_id}) {
          name
          profile_image_url
          industry_name
          description
          annual_salary
          hourly_pay
          openings
          tasks {
            id
            description
          }
          skills {
            id
            description
          }
          pros {
            id
            description
          }
          cons {
            id
            description
          }
          number_of_services
          training_length
          training_hours
          training_cost
        }
      }`
    }).then(res => {
      store.dispatch(findCareer(res.data));
    })
  }

  render() {
    const styles = {
      icon: {
        position: 'relative',
        height: '3em',
        top: '10px',
        marginRight: '50px'
      },

      listItem: {
        margin: '30px 0'
      },

      dark: {
        backgroundColor: '#232E49'
      },

      lightText: {
        color: '#EDEDED'
      },

      lightTextList: {
        color: '#EDEDED',
        display: 'inline'
      }
    }

    if (this.props.career) {
      return (
        <div>
          <Card>
            <CardMedia
              image={this.props.career.profile_image_url} 
              style={{height: '30%'}}/>
            <CardContent>
              <Typography variant='headline'>{this.props.career.name}</Typography>
              <Typography variant='body1'>{this.props.career.description}</Typography>
            </CardContent>
          </Card>
          <Card style={styles.dark}>
            <CardContent>
              <Typography variant='title' style={styles.lightText}>Average Earnings</Typography>
              <Typography variant='body1' style={styles.lightText}>
                <span style={{ color: '#1DCD8C' }}>{this.props.career.annual_salary}</span> or {this.props.career.hourly_pay}/hr
              </Typography>
              <Typography variant='title' style={styles.lightText}>Job Openings</Typography>
              <Typography variant='body1' style={styles.lightText}>
                <span style={{ color: '#1DCD8C' }}>{this.props.career.openings.split(': ')[0]}:</span> {this.props.career.openings.split(': ')[1]}
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant='title'>Typical Tasks</Typography>
                {this.props.career.tasks.map((task) => {
                  return (
                    <div key={task.id} style={styles.listItem}>
                      <img
                        style={styles.icon} 
                        src='https://s3.amazonaws.com/key-up-assets/Checkbox-for-Typical-Tasks-Icon.png' />
                      <Typography variant='body1' style={{ display: 'inline' }}>{task.description}</Typography>
                    </div>
                  )
                })}
              <Typography variant='title'>Skills Needed</Typography>
                {this.props.career.skills.map((skill) => {
                  return (
                    <div key={skill.id} style={styles.listItem}>
                      <img 
                        style={styles.icon} 
                        src='https://s3.amazonaws.com/key-up-assets/Head-Symbol.png' />
                      <Typography variant='body1' style={{ display: 'inline' }}>{skill.description}</Typography>
                    </div>
                  )
                })}
            </CardContent>
          </Card>
          <Card style={styles.dark}>
            <CardContent>
              <Typography variant='title' style={{
                color: '#1DCD8C',
                textAlign: 'center'
              }}>PROS</Typography>
              {this.props.career.pros.map((pro) => {
                return (
                  <div key={pro.id} style={styles.listItem}>
                    <img
                      style={styles.icon}
                      src='https://s3.amazonaws.com/key-up-assets/White-thumbs-up-symbol.png' />
                    <Typography variant='body1' style={styles.lightTextList}>{pro.description}</Typography>
                  </div>
                )
              })}
              <Typography variant='title' style={{
                color: '#E9DC00',
                textAlign: 'center'
              }}>CONS</Typography>
              {this.props.career.cons.map((con) => {
                return (
                  <div key={con.id} style={styles.listItem}>
                    <img
                      style={styles.icon}
                      src='https://s3.amazonaws.com/key-up-assets/white-thumbs-down.png' />
                    <Typography variant='body1' style={styles.lightTextList}>{con.description}</Typography>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    career: state.careers.career,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ findCareer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CareerProfile);