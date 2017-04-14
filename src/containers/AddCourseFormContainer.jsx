import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddCourseForm from '../components/AddCourseForm';
import postRequirementsIfNeeded from '../actions/actions';

class AddCourseFormContainer extends Component {

  componentWillMount() {
    const { loadReqs, major } = this.props;
    loadReqs(major);
  }

  render() {
    return (
      <AddCourseForm />
    );
  }
}

AddCourseFormContainer.propTypes = {
  major: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  major: state.LoginReducer.major,
  requirements: state.RequirementsReducer.generalRequirements,
});

const mapDispatchToProps = dispatch => ({
  loadReqs: (major) => dispatch(postRequirementsIfNeeded(major)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCourseFormContainer);
