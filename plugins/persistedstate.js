import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'komakey',
    paths: ['koma.massKoma', 'koma.totalEndKoma'],
    storage: window.sessionStorage,
  })(store);
};
