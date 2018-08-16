import React from 'react';
import Career from './Career.jsx';
import Grid from '@material-ui/core/Grid';
import FilterandSort from './FilterAndSort.jsx';
// import { store } from '../store/index';
// import { bindActionCreators } from 'redux';
// import { getPageTitle } from '../actions/action';



class Careers extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   window.scrollTo(0,0);
  //   console.log('window', window)
  // }

  // componentWillUnmount() {

  //   let temp = store.getState();
  //   store.dispatch(getPageTitle(temp.pages.past[0].page));
  // }

  render() {
    // console.log('careers list component', store.getState());
    // console.log('history', this.props.router.history);

    return (
      <div>
        <FilterandSort 
          industries={this.props.industries}
          filterCareers={this.props.filterCareers}
        />
        <Grid container spacing={8}>
          {this.props.careers.map((career, index) => {
            return <Career key={career.id || index} career={career} />;
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // pages: state.pages.present.page
    pages: state.pages.page
  };
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ getPageTitle}, dispatch);
// }

export default Careers;
