import { connect } from 'react-redux';
import { updatePlan } from '../actions/actions';
import UpdatePlan from '../components/UpdatePlan';

const mapStateToProps = state => ({
  plannedCourses: state.Student.plannedCourses,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { plannedCourses } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    onClick: (e) => {
      e.preventDefault();
      dispatch(updatePlan(plannedCourses));
    },
  };
};

const UpdatePlanContainer = connect(
  mapStateToProps,
  null,
  mergeProps,
)(UpdatePlan);

export default UpdatePlanContainer;
