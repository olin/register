import $ from 'jquery';

export const toggleSetting = (name) => ({
	type: 'TOGGLE_SETTING',
	name,
});

// Graduation requirements by major

export const receiveRequirements = (json) =>({
	type: 'RECEIVE_REQUIREMENTS',
	generalRequirements: json.generalRequirements,
	majorRequirements: json.majorRequirements,
});

export const postRequirements = (major) => (
	(dispatch) => {
		data = { major };
		$.post('/requirements', data)
			.done((json) => dispatch(receiveRequirements(json)))
			.fail((err, status) => console.error(err, status));
	};
);

// Courses by requirements

export const receiveCoursesByReq = (requirement, json) => ({
	type: 'RECEIVE_COURSES_BY_REQ',
	requirement,
	courses: json.courses,
});

export const postCoursesByReq = (requirement) => (
	(dispatch) => {
		data = { requirement };
		$.post('/coursesbyreq', data)
			.done((json) => dispatch(receiveRequirements(requirement, json)))
			.fail((err, status) => console.error(err, status));
	};
);
