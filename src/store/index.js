import { createStore } from 'vuex'
import router from '../router'

const store = createStore({
  state: {
    auth: {
      isAdmin: false,
      profile: null,
    },
    lifeCircle: {
      isLoading: false, //this should be true by default,
      status: {
        type: '',
        message: '',
      },
    },
    works: [],
    contacts: [
      {
        key: 'phone',
        value: '+234 813 775 6495',
      },
      {
        key: 'email',
        value: 'hello@hannah.com',
      },
      {
        key: 'address',
        value: 'available any where in the world',
      },
    ],
    socials: [
      {
        name: 'facebook',
        link: 'https://facebook.com/hannah',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/hannah',
      },
      {
        name: 'linkedin',
        link: 'https://linkedin.com/hannah',
      },
    ],
  },
  mutations: {
    updateLifeCircle(state, payload) {
      /*
      return the following payload
      payload: {
        key: <String> ie: "isLoading",
        value: <Boolean> || <Object> ie: true
      }
      */
      state.lifeCircle[payload.key] = payload.value
    },
    setAuth(state, payload) {
      //return payload <Boolean>
      state.auth.isAdmin = payload
    },
    setProfile(state, payload) {
      //return payload <Object> || <null>
      state.auth.profile = payload
    },
    addArrayItem(state, payload) {
      /*
      return the following payload
      payload: {
        key: <String> ie: "socials",
        value: <Object> ie: {name: "", link: ""}
      }
      */
      state[payload.key].push(payload.value)
    },
    removeArrayItem(state, payload) {
      /*
      return the following payload
      payload: {
        key: <String> ie: "socials",
        arrKey: <String> ie: "name",
        arrValue: <String> ie: "facebook",
      }
      */
      state[payload.key].filter(
        (item) => item[payload.arrKey] !== payload.arrValue
      )
    },
  },
  actions: {
    async login({ commit }, payload) {
      commit('updateLifeCircle', {
        key: 'isLoading',
        value: true,
      })
      //do some api calling here and get accessToken
      //store in localStorage.setItem('accessToken');
      //fetch user profile with accessToken

      //for demo purpose
      setTimeout(() => {
        commit('setProfile', {
          ...payload,
          firstName: 'Hannah',
          lastName: 'Nwokocha',
          middleName: 'Sopuruchi',
          photoUrl: 'https://avatars.githubusercontent.com/u/62136073?v=4',
          createAt: '2022-02-25T23:35:21.047Z',
        })
        commit('setAuth', true)
        commit('updateLifeCircle', {
          key: 'isLoading',
          value: false,
        })
        router.push('/dashboard')
      }, 3000)
    },
    logout({ commit }) {
      // remove localStorage item
      // localStorage.removeItem('accessToken')
      commit('setAuth', false)
      commit('setProfile', null)
      router.push('/admin')
    },
  },
})

export default store
