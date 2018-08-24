import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteCareers from './FavoriteCareers.jsx';
import FavoriteTrainings from './FavoriteTrainings.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      careerFaves: [],
      trainingFaves: []
    }
  }

  componentDidMount() {
    let careers = [];
    let trainings = [];
    //parsing the different types of favorites
    if (this.props.favorites.length > 0) {
      for (let fave of this.props.favorites) {
        if (fave.career_id !== null) {
          careers.push(fave);
        } else if (fave.service_id !== null) {
          trainings.push(fave);
        }
      }
    }

    this.setState({
      careerFaves: careers,
      trainingFaves: trainings
    });
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    // div with tabs - background color #3651C5
    return (
      <div>
        <Paper>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Favorite Careers" />
            <Tab label="Favorite Training" />
          </Tabs>
          {this.state.value === 0 && <FavoriteCareers careers={this.state.careerFaves}/>}
          {this.state.value === 1 && <FavoriteTrainings trainings={this.state.trainingFaves}/>}
        </Paper>
      </div>
    )
  }
}

export default Favorites;