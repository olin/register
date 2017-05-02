import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RequirementsList from '../components/RequirementsList';
import { getRequirements } from '../actions/actions';

class RequirementsListContainer extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getRequirements());
  }
  render() {
    const { generalRequirements, majorRequirements } = this.props;
    return (
      <RequirementsList
        generalRequirements={generalRequirements}
        majorRequirements={majorRequirements}
      />
    );
  }
}

RequirementsListContainer.propTypes = {
  generalRequirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  majorRequirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  generalRequirements: state.Major.generalRequirements,
  majorRequirements: state.Major.majorRequirements,
});

export default connect(
  mapStateToProps,
)(RequirementsListContainer);
