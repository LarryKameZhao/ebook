const book = {
  state: {
    test: 1,
    fileName:'',
    menuVisible: false,
    settingVisible: -1

  },
  mutations: {
    'SET_TEST':(state, newTest) => {
      state.test = newTest
    },
    SET_FILENAME:(state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUVISIBLE:(state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    SET_SETTINGVISIBLE:(state, settingVisible) => {
      state.settingVisible = settingVisible
    },
  }
}

export default book
