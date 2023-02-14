export const state = () => ({
  user: null,
  token: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
}

export const getters = {
  user: (state) => {
    return state.user
  },

  token: (state) => {
    return state.token
  },
}
