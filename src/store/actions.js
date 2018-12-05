const actions = {
  setTest :({commit, state}, newTest) => {
    return commit('SET_TEST', newTest)

  },
  setFileName:({commit},fileName) =>{
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({commit}, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  }

}
export default actions
