import { createStore } from 'vuex'

const store = createStore({
  state: {
    auth: {
      isAdmin: false,
      profile: null,
    },
    works: [],
    contact: {},
    social: [],
  },
  mutations: {
    setAuth(state, payload) {
      state.auth.isAdmin = payload
    },
  },
})

export default store
