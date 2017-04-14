import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddCourseForm from '../components/AddCourseForm';
import { postRequirementsIfNeeded } from '../actions/actions';

class AddCourseFormContainer extends Component {

  componentWillMount() {
    const { dispatch, major } = this.props;
    dispatch(postRequirementsIfNeeded(major));
  }

  render() {
    const { requirements } = this.props;
    return (
      <AddCourseForm requirements={requirements} />
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

export default connect(
  mapStateToProps,
)(AddCourseFormContainer);
