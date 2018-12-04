const book = {
  state: {
    test: 1,
    fileName:''

  },
  mutations: {
    'SET_TEST':(state, newTest) => {
      state.test = newTest
    },
    SET_FILENAME:(state, fileName) => {
      state.fileName = fileName
    }
  },
  actions: {
    setTest :({commit, state}, newTest) => {
      return commit('SET_TEST', newTest)

    },
    setFileName:({commit},fileName) =>{
      return commit('SET_FILENAME', fileName)
    }


  }
}

export default book
