const initialState = {
  settings: [
    {
      name: 'setting1',
      checked: false,
    },
    {
      name: 'setting2',
      checked: false,
    },
    {
      name: 'setting3',
      checked: false,
    },
  ],
};

const SettingsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTING':
      return Object.assign({}, state, {
        settings: state.settings.map((setting) => {
          if (setting.name === action.name) {
            return Object.assign({}, setting, {
              checked: !setting.checked,
            });
          }
          return setting;
        }),
      });
    default:
      return state;
  }
};

export default SettingsPageReducer;
