import $ from 'jquery';

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
export const receiveUser = json => ({
  type: 'RECEIVE_USER',
  username: json.username,
  id: json.id,
});

export const login = (username, password) => {
  return (dispatch) => {
    const data = {
      username: username,
      password: password,
    };
    $.post('/login', data)
      .done(response => dispatch(receiveUser(response)))
      .fail((err, status) => console.log(err, status));
  }
};

// Register backend interaction
export const register = (username, password) => {
  return (dispatch) => {
    const data = {
      username: username,
      password: password,
    };
    console.log('here');
    $.post('/register', data)
      .done(response => {
        dispatch(receiveUser(response)
      )})
      .fail((err, status) => console.log(err, status));
  }
}
