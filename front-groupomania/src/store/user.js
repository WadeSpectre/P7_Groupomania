import UserRoutes from "../services/user";

export const user = {
  namespaced: true,
  state: {
    current_user: "none",
    current_id: "none",
    current_token: "none",
  },
  mutations: {
    getCurrentUser(state, user) {
      state.current_user = user;
    },
    getId(state, id) {
      state.current_id = id;
    },
    getToken(state, token) {
      state.current_token = token;
    },
  },
  actions: {
    modifyCurrentUser({ commit }, formData) {
      return UserRoutes.modifyCurrentUser(formData);
    },
    getCurrentUser({ commit }) {
      return UserRoutes.getCurrentUser().then((user) => {
        commit("getCurrentUser", user);
        return Promise.resolve(user);
      });
    },
    getAllUsers({ commit }) {
      return UserRoutes.getAllUsers().then((users) => {
        return Promise.resolve(users);
      });
    },
    deleteUser({ commit }) {
      return UserRoutes.deleteUser();
    },
    adminDeleteUser({ commit }, userId) {
      return UserRoutes.adminDeleteUser(userId);
    },
  },
};
