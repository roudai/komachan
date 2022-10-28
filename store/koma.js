export const state = () => ({
  massKoma: 10,
  totalEndKoma: 0,
});

export const mutations = {
  setMassKoma(state, num) {
    state.massKoma = num;
  },
  setTotalEndKoma(state, num) {
    state.totalEndKoma = num;
  },
};

export const actions = {
  setMassKoma({ commit }, num) {
    commit('setMassKoma', num);
  },
  setTotalEndKoma({ commit }, num) {
    commit('setTotalEndKoma', num);
  },
};
