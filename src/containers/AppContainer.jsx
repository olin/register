import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import App from '../components/App';

// Connect with Presentational Component
const mapStateToProps = state => ({
  loggedIn: state.LoginReducer.loggedIn,
});

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(App));
