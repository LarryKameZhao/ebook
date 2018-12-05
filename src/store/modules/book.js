const book = {
  state: {
    test: 1,
    fileName:'',
    menuVisible: false

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
    }
  }
}

export default book
