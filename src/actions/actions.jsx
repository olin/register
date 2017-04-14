import $ from 'jquery';

export function toggleSetting(name) {
  return { type: 'TOGGLE_SETTING', name };
}

export const resolvedGetCourses = data => ({
  type: 'GET_COURSES',
  data,
});

export const getCourses = courses => (
  (dispatch) => {
    const data = { courses };
    $.get('/completedcourses', data)
      .done(response => (dispatch(resolvedGetCourses(response))))
      .fail((err, status) => console.log(err, status));
  }
);
