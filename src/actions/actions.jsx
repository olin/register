// Account Page Component
export const toggleSetting = name => ({
  type: 'TOGGLE_SETTING',
  name,
});

// Login Component
export const updatePassword = password => ({
  type: 'UPDATE_PASSWORD',
  password,
});

export const updateUsername = username => ({
  type: 'UPDATE_USERNAME',
  username,
});

// Register Component
export const updateNewUsername = username => ({
  type: 'UPDATE_NEW_USERNAME',
  username,
});

export const updateNewPassword = password => ({
  type: 'UPDATE_NEW_PASSWORD',
  password,
});

export const updateConfirmPassword = password => ({
  type: 'UPDATE_CONFIRM_PASSWORD',
  password,
});

// Login backend interaction
export const userLogin = formData => ({
  type: 'USER_LOGIN',
  // form data consists of email and password
  formData,
});

export const receiveUser = json => ({
  type: 'RECEIVE_USER',
  username: json.username,
  plannedCourses: json.plannedCourses,
  completedCourses: json.completedCourses,
});

