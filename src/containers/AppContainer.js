import * as actions from '../actions';
import { connect } from 'react-redux';
import { getQuizzes } from '../reducers/index';
import { App } from '../components/App/App';

const mapStateToProps = (state) => {
  return { quizzes: state.quizReducers }
}

const mapDispatchToProps = (dispatch) => {
  return { getQuizzes: () => dispatch(getQuizzes()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
