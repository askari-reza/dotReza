export const state = () => ({
  errorMessage: undefined,
  successMessage: null,
  snackbar: false,
  loading: false,
})

export const getters = {
  errorMessage: (state) => state.errorMessage,
  successMessage: (state) => state.successMessage,
  snackbar: (state) => state.snackbar,
  loading: (state) => state.loading,
}
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setErrorMessage(state, payload) {
    state.errorMessage = payload
  },
  setSuccessMessage(state, payload) {
    state.successMessage = payload
  },
  setSnackbar(state, payload) {
    state.snackbar = payload
  },
}
export const actions = {
  async nuxtServerInit(_, { $content }) {
    // const nav = await $content('app/nav').fetch()
    // eslint-disable-next-line no-console
    // console.log(nav)
  },
  setLoading({ commit }, payload) {
    commit('setLoading', payload)
  },
  setErrorMessage({ commit }, payload) {
    if (payload) {
      commit('setErrorMessage', payload)
      commit('setSnackbar', true)
    }
  },
  setSuccessMessage({ commit }, payload) {
    if (payload) {
      commit('setSuccessMessage', payload)
      commit('setSnackbar', true)
    }
  },
  setSnackbar({ commit }, payload) {
    commit('setSnackbar', payload)
  },
  clearMessages({ commit }) {
    commit('setErrorMessage', undefined)
    commit('setSuccessMessage', undefined)
  },
}
