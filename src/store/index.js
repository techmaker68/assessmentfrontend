import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: null
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('logout');
    }
  }
});
