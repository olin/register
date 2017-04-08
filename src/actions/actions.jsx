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

export const confirmPassword = password => ({
	type: 'CONFIRM_PASSWORD',
	password,
});