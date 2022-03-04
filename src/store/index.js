import { createStore } from 'vuex'
import router from '../router'
import APIService from '../services'

const store = createStore({
  state: {
    auth: {
      isAdmin: false,
      profile: null,
    },
    status: {
      type: '',
      message: '',
    },
    lifeCircle: {
      isLoading: false, //this should be true by default,
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
    updateStatus(state, payload) {
      state.status = payload
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
      try {
        //do some api calling here and get secret and id
        const response = await APIService.post('/auth/login', payload, {
          headers: {
            'X-Variant': 'login',
          },
        })
        const data = response.data

        //store in localStorage
        localStorage.setItem('authSecret', data?.secret)

        //fetch user profile with id & secret
        const { data: profile } = await APIService.get(
          `auth/profile?secret=${data?.secret}&id=${data?.instance['@ref']?.id}`,
          {
            headers: {
              'X-Variant': 'profile',
            },
          }
        )

        commit('setProfile', profile?.data)
        commit('setAuth', true)
        commit('updateStatus', {
          type: 'success',
          message: 'Login success',
        })

        router.push('/dashboard')
      } catch (error) {
        commit('updateStatus', {
          type: 'error',
          message: error?.response?.data?.message || 'something went wrong!',
        })
        commit('updateLifeCircle', {
          key: 'isLoading',
          value: false,
        })
      }
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
