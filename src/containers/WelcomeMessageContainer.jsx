import { connect } from 'react-redux';
import WelcomeMessage from '../components/WelcomeMessage';

// Connect with Presentational Component
const mapStateToProps = state => ({
  name: state.LoginReducer.name,
});

const WelcomeMessageContainer = connect(
  mapStateToProps,
)(WelcomeMessage);

export default WelcomeMessageContainer;
