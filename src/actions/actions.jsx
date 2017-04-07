export function toggleSetting(name) {
  return { type: 'TOGGLE_SETTING', name };
}

export const updatePassword = password => ({
  type: 'UPDATE_PASSWORD',
  password,
});

export const updateUsername = username => ({
  type: 'UPDATE_USERNAME',
  username,
});
