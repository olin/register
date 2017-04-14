export function toggleSetting(name) {
  return { type: 'TOGGLE_SETTING', name };
}

function getCourses() {
  return fetch('/completedcourses')
    .then(response => response.json())
    .then(json => dispatch(resolvedGetCourses(json)))
}

export function resolvedGetCourses(data){
  return {
    type: 'GET_COURSES',
    data: data,
  }
}
