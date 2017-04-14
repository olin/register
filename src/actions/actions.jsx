import $ from 'jquery';

export function toggleSetting(name) {
  return { type: 'TOGGLE_SETTING', name };
}

export const resolvedGetCourses = data => ({
  type: 'GET_COURSES',
  data,
});

export const getCourses = (genreqs, majorreqs) => (
  (dispatch) => {
    const data = {
      genreqs,
      majorreqs,
    };
    $.get('/completedcourses', data)
      .done(response => (dispatch(resolvedGetCourses(response))))
      .fail((err, status) => console.log(err, status));
  }
);
