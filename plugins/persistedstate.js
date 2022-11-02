import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'komakey',
    storage: window.sessionStorage,
  })(store);
};
